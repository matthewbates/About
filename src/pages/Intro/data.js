import TypeWriterEffect from "react-typewriter-effect";
import { saveAs } from "file-saver";
import Resume from "../../assets/Resume.pdf";
import { IntroButton } from "./IntroElements";

const downloadResume = () => {
  saveAs(Resume, "matthewbates-resume.pdf");
};

const one = <h1>Hi, my name is</h1>;
const two = <h2 className="required">Matthew </h2>;
const three = <h2>I build things for the web.</h2>;
const four = (
  <>
    <h3>
      <p>I'm a:</p>
    </h3>
  </>
);
const five = (
  <TypeWriterEffect
    multiText={[
      "software engineer and mobile applications developer",
      "creative, passionate technologist",
      "freelance, mobile-responsive web designer",
    ]}
    textStyle={{
      fontSize: "18px",
      fontFamily: "Space Mono",
      color: "#5cdb95",
      flexWrap: "wrap",
      textDecoration: "none",
      maxWidth: "300px",
    }}
    cursorColor="#05386b"
    typeSpeed={80}
    deleteSpeed={4000}
    multiTextLoop
  />
);
const six = <IntroButton onClick={downloadResume}>Resume</IntroButton>;

export const items = [one, two, three, four, five, six];
