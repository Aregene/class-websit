/*
 * @Date: 2025-01-14 18:39:50
 * @LastEditors: Aregene
 * @LastEditTime: 2025-01-31 19:25:25
 */

import React from "react";
import { useEffect, useRef, useState } from "react";
import { Layout, Row } from "antd";
import AboutUs from "./AboutUs";
import ClassSpace from "./ClassSpace";
import ContactUs from "./ContactUs";
import NewsTable from "./NewsTable";

const { Header, Footer, Content } = Layout; // todo

const Introduction = () => {
  const [translateY, setTranslateY] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setTranslateY(scrollTop * 0.2); // 0.5 为滚动系数，可以自行调整
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "5px" }}>
      <Content style={{ padding: "30px" }}>
        <AboutUs />
      </Content>
      <ClassSpace />
      <ContactUs />
      <NewsTable />
    </div>
  );
};

export default Introduction;
