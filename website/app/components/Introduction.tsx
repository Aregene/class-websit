import React from 'react';
import { Flex, Splitter, Typography } from 'antd';

const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      Panel {props.text}
    </Typography.Title>
  </Flex>
);
const Introduction = () => {
  return (
    <div style={{ textAlign: 'center', margin: '60px 0' }}>
      <h2 style={{ 
        fontSize: '36px', 
        fontWeight: 'bold', 
        margin: '0' 
      }}>我们的班级</h2>
      <div style={{
        width: '80px', // 线的宽度
        height: '4px', // 线的高度
        backgroundColor: 'red', // 线的颜色
        margin: '10px auto' // 将线居中
      }} />
      <Splitter style={{ height: 400, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel collapsible>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel collapsible={{ start: true }}>
        <Desc text={2} />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text={3} />
      </Splitter.Panel>
    </Splitter>
    </div>
    
  );
};
  
export default Introduction;
