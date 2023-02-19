import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Socials from "./Components/Socials";
import Title from "./Components/Title";
import bg1 from "./assets/bg.jpg";
import bg2 from "./assets/bg2.jpg";
import "./Styles/style.scss";

function App() {
  const [img, setImg] = useState([bg1, bg2]);
  const [currentImg, setCurrentImg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerHeight < 912) setIsMobile(true);
    window.addEventListener("resize", handleResize);

    const imgTransition = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % 2);
    }, 10000);

    return () => {
      clearInterval(imgTransition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => setIsMobile(window.innerWidth < 912);

  const boxes = [];
  for (let i = 0; i < img.length; i++) {
    boxes.push(
      <div
        key={i}
        id={`box${i + 1}`}
        style={{
          backgroundColor: currentImg === i ? "#448DC1" : "white",
        }}
      ></div>
    );
  }

  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${img[currentImg]})`,
      }}
    >
      <NavBar isMobile={isMobile} />
      <Title currentImg={currentImg} isMobile={isMobile} />
      <div className='imgSelection-container'>{boxes}</div>
      <Socials currentImg={currentImg} />
    </div>
  );
}

export default App;
