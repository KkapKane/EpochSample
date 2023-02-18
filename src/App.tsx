import NavBar from "./Components/NavBar"
import Socials from "./Components/Socials"
import Title from "./Components/Title"
import "./Styles/style.scss"
import bg1 from  "./assets/bg.jpg"
import bg2 from  "./assets/bg2.jpg"
import {useEffect, useState } from 'react'

function App() {


  const [img, setImg] = useState([bg1, bg2])
  const [currentImg, setCurrentImg] = useState(0)
  useEffect(() => {
    let imgTransition = setInterval(() =>{
      setCurrentImg(prev => (prev + 1 ) % 2)
    }, 10000)

    return () => clearInterval(imgTransition)
  },[])

  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${img[currentImg]})`,
        backgroundPosition: "0 90%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavBar />
      <Title currentImg={currentImg} />
      <div className='imgSelection-container'>
        <div
          id='box1'
          style={{ backgroundColor: currentImg == 0 ? "#448DC1" : "white" }}
        ></div>
        <div
          id='box2'
          style={{ backgroundColor: currentImg == 1 ? "#448DC1" : "white" }}
        ></div>
      </div>
      <Socials currentImg={currentImg}/>
    </div>
  );
}

export default App
