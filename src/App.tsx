import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Temporal } from "@js-temporal/polyfill";
import { Header, Text, Spacer, Container } from "./components/liminal";

import ScrollTop from "./ScrollTop";
import Home from "./Home";
import Project from "./Project";

export default function App() {
  const [YYYY, setYYYY] = useState<number>();

  useEffect(() => {
    const getYear = () => {
      const nowJST = Temporal.Now.zonedDateTimeISO("Asia/Tokyo");
      setYYYY(nowJST.year);
    };
    getYear();
  }, []);

  return (
    <>
      <ScrollTop />
      <Header
        maxWidth={980}
        fixed={true}
        left={
          <Text size="xl" weight="bold">
            Portfolio
          </Text>
        }
        right={<>ver 26.27</>}
      />

      <Spacer size={120} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>

      <Container padding={true}>
        <Spacer size={40} />
        <hr />
        <Spacer size={20} />
        <Text size="xs">Copyright (c) {YYYY} someiro All rights reserved.</Text>
        <Spacer size={40} />
      </Container>
    </>
  );
}
