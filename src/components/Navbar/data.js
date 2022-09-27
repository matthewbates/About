import Medium from "../../assets/icons/medium.png";
import GitHub from "../../assets/icons/github.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import CodeWars from "../../assets/icons/codewars.png";
import BuyMeACoffee from "../../assets/icons/buymeacoffee.png";

export const navbarIconData = [
  {
    url: "https://www.linkedin.com/in/matthew-bates-71b7bb79/",
    img: LinkedIn,
    style: {
      height: "32px",
      marginRight: "15px",
      marginTop: "1px",
    },
  },
  {
    url: "https://www.medium.com/@matthewhcbates",
    img: Medium,
    style: { height: "32px", marginRight: "15px" },
  },
  {
    url: "https://www.codewars.com/users/matthewhcbates",
    img: CodeWars,
    style: {
      padding: 3,
      height: "26px",
      marginTop: "1px",
      marginRight: "15px",
      borderRadius: "5px",
      backgroundColor: "#A8332A",
    },
  },
  {
    url: "https://www.github.com/matthewbates",
    img: GitHub,
    style: { height: "35px", marginRight: "15px" },
  },
  {
    url: "https://www.buymeacoffee.com/matthewhcbates",
    img: BuyMeACoffee,
    style: { height: "38px", color: "black" },
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
    to: "Contact",
  },
];
