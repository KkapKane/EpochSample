import "../Styles/socials.scss";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

interface Props {
  currentImg: number;
}

export default function Socials({ currentImg }: Props) {
  return (
    <div id='socials'>
      <a href=''>
        <AiOutlineMail size={30} color={currentImg == 0 ? "white" : "black"} />
      </a>
      <a href='https://twitter.com/EpochGeo'>
        <AiOutlineTwitter
          size={30}
          color={currentImg == 0 ? "white" : "black"}
        />
      </a>
      <a href='https://www.linkedin.com/company/epochgeo/'>
        <AiOutlineLinkedin
          size={30}
          color={currentImg == 0 ? "white" : "black"}
        />
      </a>
      <a href='https://epochgeo.com/admin/index.html'>
        <FiSettings size={25} color={currentImg == 0 ? "white" : "black"} />
      </a>
    </div>
  );
}
