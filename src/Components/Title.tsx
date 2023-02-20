import "../Styles/title.scss";

interface Props {
  currentImg: number;
  isMobile: boolean;
}

export default function Title({ currentImg, isMobile }: Props) {
  const titleHeight = currentImg == 0 ? "70%" : "110%";
  const titleWidth = "20%";
  const sloganContainerWidth = !isMobile ? "80%" : "200%";
  const slogan1Color = currentImg == 1 ? "#448DC1" : "black";
  const slogan1StrokeColor = currentImg == 1 ? "black" : "black";
  const slogan1StrokeWidth = 3;
  const glassBoxMarginLeft = currentImg == 0 ? "8rem" : "4rem";
  const glassBoxWidth = "100%";
  const glassBoxBackgroundColor =
    currentImg == 0 ? "rgba(52, 52, 52, 0.25)" : "rgba(52, 52, 52, 0.75)";

  return (
    <div id='title' style={{ height: titleHeight, width: titleWidth }}>
      <div className='slogan-container' style={{ width: sloganContainerWidth }}>
        <div
          id='slogan1'
          style={{
            color: slogan1Color,
            WebkitTextStrokeColor: slogan1StrokeColor,
            WebkitTextStrokeWidth: slogan1StrokeWidth,
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
          marginLeft: glassBoxMarginLeft,
          width: glassBoxWidth,
          backgroundColor: glassBoxBackgroundColor,
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
