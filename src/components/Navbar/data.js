import Medium from "../../assets/icons/medium.png";
import GitHub from "../../assets/icons/github.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import CodeWars from "../../assets/icons/codewars.png";
import Fiverr from "../../assets/icons/fiverr.png";

export const navbarIconData = [
  {
    url: "https://www.linkedin.com/in/matthew-bates-71b7bb79/",
    img: LinkedIn,
    style: {
      height: "38px",
      marginRight: "18px",
    },
  },
  {
    url: "https://www.medium.com/@matthewhcbates",
    img: Medium,
    style: { height: "38px", marginRight: "18px" },
  },
  {
    url: "https://www.codewars.com/users/matthewhcbates",
    img: CodeWars,
    style: {
      padding: 3,
      height: "38px",
      marginRight: "18px",
      borderRadius: "5px",
      backgroundColor: "#A8332A",
    },
  },
  {
    url: "https://www.github.com/matthewbates",
    img: GitHub,
    style: { height: "42px", marginRight: "18px" },
  },
  {
    url: "https://www.fiverr.com/matthewhcbates?up_rollout=true",
    img: Fiverr,
    style: { height: "42px", marginRight: "18px" },
  },
];

export const navbarLinks = [
  {
    to: "Home",
  },
  {
    to: "About",
  },
  {
    to: "Skills",
  },
  {
    to: "Projects",
  },
  {
    to: "Testimonials",
  },
  {
    to: "Contact",
  },
];
