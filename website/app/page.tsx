"use client"
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const VideoSection = styled(motion.div)`
  width: 100%;
  height: 50%;
  background-color: #4CAF50; /* 绿色色块代替视频 */
  position: absolute;
  top: 50%;
  left: 0;
  opacity: 0;
`;

const ImageSection = styled(motion.div)`
  width: 100%;
  height: 100vh; /* 使红色背景覆盖整个屏幕 */
  background-color: red; /* 始终为红色背景 */
  position: absolute;
  top: 0;
  left: 0;
`;

const ArtText = styled(motion.div)`
  font-size: 2em; /* 调整字体大小 */
  font-weight: bold;
  color: white;
  text-align: center; /* 文字居中对齐 */
  position: absolute;
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 垂直和水平居中 */
  top: 40%; /* 根据需要调整，以使其在红框位置 */
  z-index: 2; /* 确保文字在视频板块之上 */
`;

const Page: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setIsVideoVisible(true);
    }, 2000); // 2秒后显示视频板块

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageContainer>
      <ImageSection />
      <ArtText
        initial={{ y: 0 }} 
        animate={{ y: isVideoVisible ? -100 : 0 }} // 文字上移
        transition={{ duration: 1, delay: 0.5 }} // 延迟0.5秒开始向上移动
      >
        艺术字中草药
      </ArtText>
      <VideoSection
        initial={{ y: 50, opacity: 0 }}
        animate={isVideoVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }} // 延迟1秒开始淡入
      />
    </PageContainer>
  );
};

export default Page;
