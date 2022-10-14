import React, { useState, useEffect } from "react";
import gsap from "gsap";

const NavIconEffect = () => {
  useEffect(() => {
    gsap.from(".nav-icon", {
      y: 100,
      delay: 0.8,
      opacity: 0,
      duration: 2,
      ease: "back",
      stagger: 0.25,
    });
  }, []);
};

export default NavIconEffect;
// import { debounce } from "../utils/helpers";

// const useScrollDirection = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0);
//   const [visible, setVisible] = useState(true);

//   const handleOnScroll = debounce(() => {
//     const currentScrollPos = window.pageYOffset;

//     setVisible(
//       (prevScrollPos > currentScrollPos &&
//         prevScrollPos - currentScrollPos > 70) ||
//         currentScrollPos < 10
//     );
//     setPrevScrollPos(currentScrollPos);
//   }, 50);

//   useEffect(() => {
//     window.addEventListener("scroll", handleOnScroll);
//     return () => window.removeEventListener("scroll", handleOnScroll);
//   });
// };

// export default useScrollDirection;
