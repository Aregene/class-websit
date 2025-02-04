/*
 * @Date: 2025-01-31 18:20:49
 * @LastEditors: Aregene
 * @LastEditTime: 2025-01-31 19:26:23
 */
import React from "react";
import { Typography, Divider } from "antd";
import SingleCard from "./SingleCard";

const { Title } = Typography;

const ClassSpace = () => {
  return (
    <div style={{ backgroundColor: "#F7F8FA", padding: "100px" }}>
      <Title
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          margin: "0",
          letterSpacing: "5px",
        }}
      >
        班级空间
      </Title>
      <Title
        style={{
          fontSize: "16px",
          margin: "0",
          color: "#D3D3D3",
          letterSpacing: "5px",
          paddingTop: "5px",
        }}
      >
        ClASS SPACE
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 设置为三列
          gap: "5px", // 增加卡片之间的间距
          paddingTop: "50px", // 上边距
          paddingLeft: "220px", // 左侧边距
          paddingRight: "250px", // 右侧边距
        }}
      >
        <SingleCard
          imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="同学圈"
          description="为数据处理系统建立和采用的技术..."
        />
        <SingleCard
          imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="比赛动态"
          description="智能建筑是集现代科学技术于一体的产物..."
        />
        <SingleCard
          imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="艺术展"
          description="是一种基于互联网的计算方式..."
        />
        <SingleCard
          imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="班级活动"
          description="汇集而成的对某一方面的智能集合..."
        />
        <SingleCard
          imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="实验室"
          description="主要用于科学计算和数据..."
        />
        <SingleCard
          imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          title="班级问卷"
          description="各专业部门所需的无线通信系统..."
        />
      </div>
    </div>
  );
};

export default ClassSpace;
