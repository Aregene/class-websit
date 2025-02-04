/*
 * @Date: 2024-12-18 13:16:13
 * @LastEditors: Aregene
 * @LastEditTime: 2025-02-03 18:08:47
 */
"use client";
import React from "react";
import ImageSlider from "./ImageSlider";
import Introduction from "./Introduction";
// import Pro from './components/ProductList';

const App = () => {
  return (
    <div>
      <ImageSlider />
      <Introduction />
      {/* <Pro /> */}
      <footer
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center",
        }}
      >
        © 2024 应用技术大学241042Y2班级 | 保留所有权利
      </footer>
    </div>
  );
};

export default App;
