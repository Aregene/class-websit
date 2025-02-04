/*
 * @Date: 2025-01-31 18:20:24
 * @LastEditors: Aregene
 * @LastEditTime: 2025-01-31 19:26:19
 */
import React from "react";
import { Row, Col, Typography, Image, Divider } from "antd";

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  const referenceDate: Date = new Date("2024-08-31");
  const currentDate: Date = new Date();
  const timeDifference: number =
    currentDate.getTime() - referenceDate.getTime();
  const dayDifference: number = Math.floor(
    timeDifference / (1000 * 60 * 60 * 24),
  );

  return (
    <div style={{ backgroundColor: "#FFFFFF", padding: "50px" }}>
      <Row>
        <Col span={11}>
          <Image
            width={550}
            height={410}
            src="error"
            fallback="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            style={{ paddingLeft: "100px" }}
          />
        </Col>
        <Col span={12}>
          <Title style={{ textAlign: "left", margin: "10px 0 0 0" }}>
            <span
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: 0,
                lineHeight: "1.2",
                letterSpacing: "5px",
              }}
            >
              关于我们
            </span>
            <span style={{ margin: "0 10px" }} />{" "}
            {/* 设置 margin 作为空白占位符 */}
            <span
              style={{
                color: "#D3D3D3",
                marginBottom: "0px",
                fontSize: "16px",
              }}
            >
              ABOUT US
            </span>
          </Title>
          <Row
            style={{
              color: "#A0C4E1",
              margin: "10px 0 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              lineHeight: "1.2",
              fontWeight: "bold",
            }}
          >
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>勤</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>/</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>奋</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>/</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>好</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>/</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>学</Col>
            <span style={{ margin: "0 14px", fontSize: "20px" }}></span>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>学</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>/</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>无</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>/</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>止</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>/</Col>
            <Col style={{ margin: "0 5px", fontSize: "20px" }}>境</Col>
          </Row>
          <Paragraph
            style={{
              textAlign: "left",
              margin: "20px 0 0 0",
              letterSpacing: "0.5px",
              fontSize: "14px",
              lineHeight: "2",
              color: "grey",
              marginTop: "40px",
            }}
          >
            241042Y2班是上海应用技术大学计算机专业的一支优秀团队。
            成立于2024年8月31日，我们由一群充满热情和创造力的学生组成。
            班级积极倡导良好的学术风气，成员们共同努力，在技术讨论和科研活动中相互学习与成长。
            通过知识的分享与合作，我们致力于培养具备创新精神和实践能力的高素质人才，为未来的发展奠定坚实的基础。
            作为241042Y2班的一员，我们将共同迎接挑战，创造辉煌。
          </Paragraph>
          <Col span={40}>
            <Row justify="space-around">
              <Divider
                style={{
                  borderColor: "#D3D3D3",
                  borderWidth: "0.5px",
                  margin: "30px 0 0 0",
                }}
              ></Divider>
              <Col>
                <Title
                  level={2}
                  style={{
                    color: "#A0C4E1",
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "10px 0 10px 0",
                  }}
                >
                  2024
                </Title>
                <Paragraph>成立于2024年</Paragraph>
              </Col>
              <Col>
                <Title
                  level={2}
                  style={{
                    color: "#A0C4E1",
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "10px 0 10px 0",
                  }}
                >
                  40
                </Title>
                <Paragraph>优秀学生40人</Paragraph>
              </Col>
              <Col>
                <Title
                  level={2}
                  style={{
                    color: "#A0C4E1",
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "10px 0 10px 0",
                  }}
                >
                  {dayDifference}
                </Title>
                <Paragraph>共度{dayDifference}天</Paragraph>
              </Col>
              <Divider
                style={{
                  borderColor: "#D3D3D3",
                  borderWidth: "0.5px",
                  margin: "12px 0 0 0",
                }}
              ></Divider>
            </Row>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
