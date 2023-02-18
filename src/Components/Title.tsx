import "../Styles/title.scss"
import {useEffect } from 'react';


interface Props {
    currentImg: number;
}

export default function Title({currentImg}: Props) {

useEffect (() => {
console.log(currentImg)
}, [currentImg])

    return (
      <div
        id='title'
        style={{
          height: currentImg == 0 ? "92%" : "128%",
          width: currentImg == 0 ? "50%" : "25%",
        }}
      >
        <div className='slogan-container'>
          <div
            id='slogan1'
            style={{
              color: currentImg == 1 ? "#448DC1" : "black",
              WebkitTextStrokeColor: currentImg == 1 ? "white" : "black",
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