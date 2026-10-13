"use client";

import Cropper, { Area } from "react-easy-crop";
import { useCallback, useRef, useState } from "react";

import styles from "./upload.module.css";

type UploadValue = {
  file: Blob | null;
  preview: string;
};

type Props = {
  value: UploadValue;

  onChange: (value: UploadValue) => void;
};

export default function Upload({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [editingImage, setEditingImage] = useState<string>("");

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState<number>(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback(
    (_croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const selectFile = (file: File) => {
    const allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      alert("jpg または png のみアップロードできます");
      return;
    }

    const url = URL.createObjectURL(file);

    setEditingImage(url);
  };

  const createThumbnail = async () => {
    if (!croppedAreaPixels) return;

    const image = document.createElement("img");

    image.src = editingImage;

    await new Promise((resolve) => {
      image.onload = resolve;
    });

    const canvas = document.createElement("canvas");

    canvas.width = 1280;
    canvas.height = 720;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      1280,
      720,
    );

    canvas.toBlob(
      (blob) => {
        if (!blob) return;

        const preview = URL.createObjectURL(blob);

        onChange({
          file: blob,
          preview,
        });

        setEditingImage("");
      },
      "image/jpeg",
      0.9,
    );
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png"
        className={styles.hiddenInput}
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            selectFile(file);
          }
        }}
      />

      {!editingImage && (
        <div
          className={styles.dropArea}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();

            const file = e.dataTransfer.files?.[0];

            if (file) {
              selectFile(file);
            }
          }}
        >
          {value.preview ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={value.preview}
                alt="thumbnail"
                className={styles.preview}
              />
            </>
          ) : (
            <div className={styles.placeholder}>
              <p>画像をドラッグ＆ドロップ</p>
              <p>またはクリックして選択</p>
            </div>
          )}
        </div>
      )}

      {editingImage && (
        <div className={styles.editorWrapper}>
          <div className={styles.cropperWrapper}>
            <Cropper
              image={editingImage}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>

          <div className={styles.controls}>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />

            <div className={styles.buttons}>
              <button
                type="button"
                onClick={() => {
                  setEditingImage("");
                }}
              >
                キャンセル
              </button>

              <button type="button" onClick={createThumbnail}>
                完了
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
