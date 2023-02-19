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

interface SocialIcon {
  href: string;
  size: number;
  color: string;
  Icon: React.ElementType;
}



export default function Socials({ currentImg }: Props) {
  const socialIcons: SocialIcon[] = [
    {
      href: "",
      size: 30,
      color: currentImg == 0 ? "white" : "black",
      Icon: AiOutlineMail,
    },
    {
      href: "https://twitter.com/EpochGeo",
      size: 30,
      color: currentImg == 0 ? "white" : "black",
      Icon: AiOutlineTwitter,
    },
    {
      href: "https://www.linkedin.com/company/epochgeo/",
      size: 30,
      color: currentImg == 0 ? "white" : "black",
      Icon: AiOutlineLinkedin,
    },
    {
      href: "https://epochgeo.com/admin/index.html",
      size: 25,
      color: currentImg == 0 ? "white" : "black",
      Icon: FiSettings,
    },
  ];
  return (
    <div id='socials'>
      {socialIcons.map((icon) => (
        <a href={icon.href} key={icon.href}>
          <icon.Icon size={icon.size} color={icon.color} />
        </a>
      ))}
    </div>
  );
}
