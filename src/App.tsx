import { useState, useEffect } from "react";
import {
  Text,
  Card,
  CardContainer,
  Container,
  Spacer,
  Header,
} from "./components/liminal";

import {
  MdLink,
  MdLocationPin,
  MdAlternateEmail,
  MdAccessTime,
  MdCode,
} from "react-icons/md";

import { PiCertificateBold } from "react-icons/pi";

import { Temporal } from '@js-temporal/polyfill';

type CmsUser = {
  userIcon: {
    url: string;
  };
  userName: string;
  userDetail: string;
};

type CmsContent = {
  title: string;
  url?: string;
  stack?: string;
  date?: string;
};

type CmsCollection = {
  contents: CmsContent[];
};

export default function Home() {
  const [time, setTime] = useState("--:--:--");
  const [YYYY, setYYYY] = useState<number>();

  useEffect(() => {
    const updateTime = () => {
      const dateObject = new Date();
      const time = new Intl.DateTimeFormat("ja-JP", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(dateObject);

      setTime(time);

      // 何これすげぇ
      const nowJST = Temporal.Now.zonedDateTimeISO('Asia/Tokyo');
      setYYYY(nowJST.year);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const [myName, setMyName] = useState<CmsUser | null>(null);
  const [link, setLink] = useState<CmsCollection | null>(null);
  const [sns, setSNS] = useState<CmsCollection | null>(null);
  const [project, setProject] = useState<CmsCollection | null>(null);
  const [cert, setCert] = useState<CmsCollection | null>(null);

  useEffect(() => {
    const getCMS = () => {
      fetch("https://some16.microcms.io/api/v1/myname", {
        method: "GET",
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyName(data));

      fetch("https://some16.microcms.io/api/v1/link", {
        method: "GET",
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => setLink(data));

      fetch("https://some16.microcms.io/api/v1/sns", {
        method: "GET",
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => setSNS(data));
      fetch("https://some16.microcms.io/api/v1/project", {
        method: "GET",
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => setProject(data));
      fetch("https://some16.microcms.io/api/v1/cert", {
        method: "GET",
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.VITE_X_MICROCMS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => setCert(data));
    };
    getCMS();
  }, []);

  if (!myName || !link || !sns || !project || !cert) {
    return null;
  }

  return (
    <>
      <Header
        maxWidth={980}
        fixed={true}
        left={
          <Text size="xl" weight="bold">
            Portfolio
          </Text>
        }
        right={<>ver 26.10</>}
      />

      <Spacer size={120} />

      <Container padding={true}>
        <img
          style={{ borderRadius: "50px" }}
          width="100"
          height="100"
          src={myName.userIcon["url"]}
        />
        <Spacer size={16} />
        <h1>{myName.userName}</h1>
        <Spacer size={16} />
        <p>{myName.userDetail}</p>
      </Container>

      <Spacer size={120} />

      <Container padding={true}>
        <h1>
          <MdLocationPin />
        </h1>

        <Spacer size={25} />

        <CardContainer padding={true}>
          <Card title="Saitama, Japan" detail=" " meta=" " />
        </CardContainer>
        <Spacer size={30} />
      </Container>

      <Container padding={true}>
        <h1>
          <MdAccessTime />
        </h1>

        <Spacer size={20} />

        <CardContainer padding={true}>
          <Card title={time} detail="UTC +09:00" meta=" " />
        </CardContainer>

        <Spacer size={40} />
        <hr />
        <Spacer size={20} />
      </Container>

      <Container padding={true}>
        <h1>
          <MdLink />
        </h1>

        <Spacer size={20} />

        <CardContainer padding={true}>
          {link.contents.map((content) => {
            return (
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <Card title={content.title} detail={content.url} meta=" " />
              </a>
            );
          })}
        </CardContainer>

        <Spacer size={40} />
        <hr />
        <Spacer size={20} />
      </Container>

      <Container padding={true}>
        <h1>
          <MdAlternateEmail />
        </h1>

        <Spacer size={25} />

        <CardContainer padding={true}>
          {sns.contents.map((content) => {
            return (
              <a href={content.url} target="_blank" rel="noopener noreferrer">
                <Card title={content.title} detail={content.url} meta=" " />
              </a>
            );
          })}
        </CardContainer>

        <Spacer size={40} />
        <hr />
        <Spacer size={20} />
      </Container>

      <Container padding={true}>
        <h1>
          <MdCode />
        </h1>

        <Spacer size={20} />

        <CardContainer padding={true}>
          {project.contents.map((content) => {
            return (
              <>
                <a href={content.url} target="_blank" rel="noopener noreferrer">
                  <Card title={content.title} detail={content.stack} meta=" " />
                </a>
              </>
            );
          })}
        </CardContainer>

        <Spacer size={40} />
        <hr />
        <Spacer size={20} />
      </Container>

      <Container padding={true}>
        <h1>
          <PiCertificateBold />
        </h1>

        <Spacer size={20} />

        <Container padding={true}>
          {cert.contents.map((content) => {
            const date = new Date(content.date!);
            const formatted = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
              era: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "Asia/Tokyo"
            }).format(date);

            return (
              <>
                <Card title={content.title} detail={formatted} meta=" " />
                <Spacer size={20} />
              </>
            );
          })}
        </Container>

        <Spacer size={40} />
        <hr />
        <Spacer size={20} />
      </Container>
      
      <Container padding={true}>
          <Text size="xs">Copyright (c) { YYYY } { myName.userName } All rights reserved.</Text>
          <Spacer size={40} />
      </Container>
    </>
  );
}
