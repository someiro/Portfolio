"use client";

import { useState } from "react";
import {
  Button,
  Text,
  TextField,
  TextArea,
  Badge,
  Card,
  CardContainer,
  Container,
  Modal,
  Menu,
  Spacer,
  Header,
  Loading,
  Checkbox,
  Switch,
  Tabs,
  Radio,
  Select,
} from "@/components/liminal";
import "@/components/liminal/globals.css";


export default function Home() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [value, setValue] = useState("A");
  const [selectValue, setSelectValue] = useState("music");

  return (
    <>
      <Header
        maxWidth={1300}
        fixed={true}
        left={
          <Text size="xl" weight="bold">
            liminal
          </Text>
        }
        right={<Text size="xr">@someiro</Text>}
      />

      <Spacer size={50} />

      <Container padding={true}>
        <h1>General</h1>
        <Spacer size={20} />
        <h2>Button</h2>
        <Spacer size={10} />
        <Button disabled={false} variant="filled" intention="primary">
          ボタン
        </Button>
        <Spacer size={20} />
        <h2>Text</h2>
        <Spacer size={10} />
        <Text size="xl" weight="normal">
          テキストを表示させます
        </Text>
        <hr />
        <Spacer size={50} />
        <h1>Form</h1>
        <Spacer size={20} />
        <h2>TextField</h2>
        <Spacer size={10} />
        <TextField
          label="テキストを入力"
          disabled={false}
          required={true}
          error={true}
          helperText="補助テキスト"
          size="medium"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Spacer size={10} />
        <h3>{name}</h3>
        <Spacer size={20} />
        <h2>TextArea</h2>
        <Spacer size={10} />
        <TextArea
          label="テキストを入力"
          disabled={false}
          required={true}
          error={true}
          helperText="補助テキスト"
          size="medium"
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Spacer size={10} />
        <h3>{comment}</h3>
        <Spacer size={20} />
        <h2>Checkbox</h2>
        <Spacer size={10} />

        <Checkbox
          checked={checked}
          onChange={setChecked}
          label="利用規約に同意"
        />
        <Spacer size={20} />

        <h2>Radio</h2>
        <Spacer size={10} />

        <Radio
          label="ひとつ選択してください"
          value={value}
          onChange={setValue}
          contents={[
            { label: "選択肢A", value: "A" },
            { label: "選択肢B", value: "B" },
            { label: "選択肢C", value: "C" },
          ]}
        />
        <Spacer size={20} />

        <h2>Switch</h2>
        <Spacer size={10} />

        <Switch
          checked={enabled}
          onChange={setEnabled}
          label="メールマガジンの送信"
        />
        <Spacer size={20} />
        <h2>Select</h2>
        <Spacer size={10} />

        <Select
          label="カテゴリー"
          value={selectValue}
          onChange={setSelectValue}
          options={[
            { label: "音楽", value: "music" },
            { label: "映像", value: "movie" },
            { label: "イラスト", value: "illust" },
          ]}
        />

        <Spacer size={10} />
        <hr />

        <Spacer size={50} />
        <h1>Data Display</h1>
        <Spacer size={20} />
        <h2>Badge</h2>
        <Spacer size={10} />
        <Badge label="ライブ配信中" intention="primary" />
        <Spacer size={20} />
        <h2>Card</h2>
        <Spacer size={10} />
        <Card
          image="https://picsum.photos/seed/picsum/500/500"
          title="カードタイトル"
          detail="ここに詳細情報"
          meta="yyyy-mm-dd"
        />
        <Card
          image="https://picsum.photos/id/1060/500/500"
          title="カードタイトル"
          detail="ここに詳細情報"
          meta="yyyy-mm-dd"
        />
        <hr />
        <Spacer size={50} />
        <h1>Layout</h1>
        <Spacer size={20} />
        <h2>Container</h2>
        <Spacer size={10} />
        <Container padding={true} maxWidth={800}>
          <h3>Hello!</h3>
          <p>コンテナ内のテキストです</p>
          <a href="https://google.com/">https://google.com</a>
        </Container>
        <Spacer size={20} />
        <h2>CardContainer</h2>
        <Spacer size={10} />
        <CardContainer padding={true}>
          <Card
            image="https://picsum.photos/id/800/500/500"
            title="カードタイトル"
            detail="ここに詳細情報"
            meta="yyyy-mm-dd"
          />
          <Card
            image="https://picsum.photos/id/870/500/500"
            title="カードタイトル"
            detail="ここに詳細情報"
            meta="yyyy-mm-dd"
          />
          <Card
            image="https://picsum.photos/id/871/500/500"
            title="カードタイトル"
            detail="ここに詳細情報"
            meta="yyyy-mm-dd"
          />
          <Card
            image="https://picsum.photos/id/873/500/500"
            title="カードタイトル"
            detail="ここに詳細情報"
            meta="yyyy-mm-dd"
          />
          <Card
            image="https://picsum.photos/id/875/500/500"
            title="カードタイトル"
            detail="ここに詳細情報"
            meta="yyyy-mm-dd"
          />
        </CardContainer>
        <Spacer size={20} />
        <h2>Header</h2>
        <Spacer size={10} />
        <Text size="l">上部に表示されています。</Text>
        <Spacer size={20} />
        <h2>Spacer</h2>
        <Spacer size={10} />
        <Text size="xr">top</Text>
        <Spacer size={100} />
        <Text size="xr">bottom</Text>
        <hr />
        <Spacer size={50} />
        <h1>Feedback</h1>
        <Spacer size={20} />
        <h2>Modal</h2>
        <Spacer size={10} />
        <Button onClick={() => setOpen(true)}>開く</Button>
        <Modal open={open}>
          <h2>タイトル</h2>
          <Spacer size={10} />
          <p>モーダルの内容</p>
          <Spacer size={20} />
          <Button onClick={() => setOpen(false)}>閉じる</Button>
        </Modal>
        <Spacer size={20} />
        <h2>Menu</h2>
        <Spacer size={10} />
        <Text size="l">右下に表示されています。</Text>
        <Menu>
          <Button>Home</Button>
          <Button>Search</Button>
        </Menu>
        <Spacer size={20} />
        <h2>Loading</h2>
        <Spacer size={20} />
        <Loading size={100} />
        <Spacer size={20} />
        <h2>Tabs</h2>
        <Tabs
          default="home"
          tabs={[
            { value: "home", label: "Home", component: <h3>Home</h3> },
            { value: "about", label: "About", component: <h3>About</h3> },
            { value: "work", label: "Work", component: <h3>Work</h3> },
          ]}
        />
      </Container>
    </>
  );
}
