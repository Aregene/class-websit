/*
 * @Date: 2025-01-31 18:14:31
 * @LastEditors: Aregene
 * @LastEditTime: 2025-01-31 19:27:09
 */
import React from "react";
import { Card, Image } from "antd";
import { RightOutlined } from "@ant-design/icons";

interface SingleCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <Card
    hoverable
    style={{
      width: "340px",
      boxShadow: "none",
      border: "none",
      margin: "0px",
      backgroundColor: "#FFFFFF", // 设置卡片底色为米白色
      overflow: "hidden", // 确保超出部分被隐藏
      borderRadius: "0", // 去掉圆角
    }}
  >
    <img
      alt="example"
      src={imageSrc}
      style={{
        width: "360px",
        height: "180px",
        position: "relative", // 设置为相对定位
        top: "-30px", // 调整向上覆盖的距离，您可以根据需要调整
        left: "-30px", // 调整左侧距离
      }}
    />
    <Card.Meta
      title={title}
      description={description}
      style={{ textAlign: "left" }}
    />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "rgba(173, 216, 230, 0.5)", // 淡天蓝色
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "5px",
        }}
      >
        <RightOutlined style={{ color: "#ACCAE4", fontSize: "9px" }} />
      </div>
      <span style={{ color: "#ACCAE4" }}>查看详情</span>
    </div>
  </Card>
);

export default SingleCard;
