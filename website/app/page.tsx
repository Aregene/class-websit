"use client";
import React from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Introduction from './components/Introduction';
import ProductList from './components/ProductList';
import './App.css'; // 引入 CSS 文件

const App = () => {
  const herbImages = [
    { src: "/file1.svg", alt: "草药 1" },
    { src: "/file2.svg", alt: "草药 2" },
    { src: "/file3.svg", alt: "草药 3" },
  ];

  return (
    <div>
      <Header />
      <ImageSlider/>
      <Introduction />
      <ProductList herbImages={herbImages} />
      <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
        © 2023 中草药公司 | 保留所有权利
      </footer>
    </div>
  );
};

export default App;
