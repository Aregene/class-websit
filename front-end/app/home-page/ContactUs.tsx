/*
 * @Date: 2025-01-31 18:21:07
 * @LastEditors: Aregene
 * @LastEditTime: 2025-01-31 19:26:30
 */
import React, { useEffect, useRef, useState } from "react";
import { Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  const [translateY, setTranslateY] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setTranslateY(scrollTop * 0.2); // 0.2 为滚动系数，可以自行调整
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{ height: "450px", overflow: "hidden", position: "relative" }}
        >
          <img
            ref={imageRef}
            src="https://tp.daxuejiayou.com/article/20240812/73b5aace1b6ced5e.jpg"
            alt="Background"
            style={{
              width: "100%",
              height: "auto",
              transition: "transform 1s ease-out",
              transform: `translateY(-${translateY}px)`, // 根据滚动距离进行位移
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(72,100,124,0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  fontSize: "54px",
                  letterSpacing: "5px",
                  color: "#FFFFFF", // 字体颜色透明
                  position: "relative", // 相对定位
                  backgroundClip: "text", // 文字背景裁剪
                  WebkitBackgroundClip: "text", // Safari 支持
                  textShadow: "none", // 去掉阴影
                }}
              >
                联系
              </h2>
              <h2
                style={{
                  margin: 0,
                  fontWeight: "bold",
                  fontSize: "54px",
                  letterSpacing: "5px",
                  color: "transparent", // 字体颜色透明
                  textShadow: "0 0 5px rgba(0, 0, 0, 0.5)", // 字体边缘效果
                  WebkitTextStroke: "2px #FFFFFF", // 设置字体边缘颜色
                }}
              >
                我们
              </h2>
            </div>
            <Paragraph
              style={{
                margin: "10px 0 24px 0",
                color: "#FFFFFF",
                fontSize: "18px",
              }}
            >
              为了便于我们更好的为您服务，请正确填写以下信息，我们会尽快的与您取得联系，并反馈您的需求！
            </Paragraph>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
              }}
            >
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{
                  marginRight: "10px",
                  padding: "28px 124px",
                  fontSize: "14px",
                  backgroundColor: "#8AB9DD",
                  fontWeight: "bold",
                }}
              >
                在线留言
              </Button>
              <span style={{ margin: "0 36px" }} />
              <div
                style={{
                  padding: "14px 64px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "100px",
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                联系：241042-Y2-11
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
