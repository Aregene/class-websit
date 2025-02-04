import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";

const contentStyle: React.CSSProperties = {
  height: "560px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#f2feee",
  paddingBottom: "5px",
};

const ImageSlider: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image
        width={2000}
        height={860}
        src="error"
        fallback="https://tp.daxuejiayou.com/article/20240812/73b5aace1b6ced5e.jpg"
      />
    </div>
    <div>
      <Image
        width={2000}
        height={860}
        src="error"
        fallback="https://tp.daxuejiayou.com/article/20240812/73b5aace1b6ced5e.jpg"
      />
    </div>
    <div>
      <Image
        width={2000}
        height={860}
        src="error"
        fallback="https://tp.daxuejiayou.com/article/20240812/73b5aace1b6ced5e.jpg"
      />
    </div>
    <div>
      <Image
        width={2000}
        height={860}
        src="error"
        fallback="https://tp.daxuejiayou.com/article/20240812/73b5aace1b6ced5e.jpg"
      />
    </div>
  </Carousel>
);

export default ImageSlider;
