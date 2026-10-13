"use client";

import styles from "./tabs.module.css";
import { useState } from "react";

type TabItem = {
  value: string;
  label: React.ReactNode;
  component: React.ReactNode;
};

type TabsProps = {
  default: string;
  tabs: TabItem[];
};

const Tabs = (props: TabsProps) => {
  const [now, setNow] = useState(props.default);

  return (
    <>
      <div className={styles.tabsContainer}>
        {props.tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setNow(tab.value)}
            className={tab.value === now ? styles.select: undefined}
            >
                {tab.label}
            </button>
        ))}
      </div>
      <div className={styles.tabsItemContainer}>
        {props.tabs.map((tab) => (
          <div
            key={tab.value}
            style={{
              display: tab.value === now ? "block" : "none",
            }}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
