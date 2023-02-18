import "../Styles/title.scss";
import { useEffect } from "react";

interface Props {
  currentImg: number;
  isMobile: boolean;
}

export default function Title({ currentImg, isMobile }: Props) {
  return (
    <div
      id='title'
      style={
        !isMobile
          ? {
              height: currentImg == 0 ? "92%" : "128%",
              width: currentImg == 0 ? "50%" : "25%",
            }
          : {
              height: currentImg == 0 ? "50%" : "104%",
              width: currentImg == 0 ? "20%" : "30%",
            }
      }
    >
      <div
        className='slogan-container'
        style={!isMobile ? { width: "80%" } : { width: "200%" }}
      >
        <div
          id='slogan1'
          style={{
            color: currentImg == 1 ? "#448DC1" : "black",
            WebkitTextStrokeColor: currentImg == 1 ? "black" : "black",
            WebkitTextStrokeWidth: 3,
          }}
        >
          Innovation
        </div>
        <div id='ampersand' style={{ color: "black" }}>
          &
        </div>
        <div id='slogan2'>Impact</div>
      </div>
      <div
        className='glass-box'
        style={{
          marginLeft: currentImg == 0 ? "8rem" : "4rem",

          width: currentImg == 0 ? "35%" : "120%",
          backgroundColor:
            currentImg == 0
              ? "rgba(52, 52, 52, 0.25)"
              : "rgba(52, 52, 52, 0.75)",
        }}
      >
        <div id='company-quote'>
          Our experts are bridging the fields of Geo-spatial, Data Science,
          Software Development, and Analytics.
        </div>
      </div>
    </div>
  );
}
