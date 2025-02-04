/*
 * @Date: 2025-01-31 18:14:07
 * @LastEditors: Aregene
 * @LastEditTime: 2025-01-31 19:26:36
 */
import React from "react";
import { Flex, Typography } from "antd";

interface DescProps {
  text?: string | number;
}

const Desc: React.FC<DescProps> = (props) => (
  <Flex justify="center" align="center" style={{ height: "100%" }}>
    <Typography.Title
      type="secondary"
      level={5}
      style={{ whiteSpace: "nowrap" }}
    >
      Panel {props.text}
    </Typography.Title>
  </Flex>
);

export default Desc;
