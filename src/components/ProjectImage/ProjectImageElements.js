import styled from "styled-components";

export const StyledProjectImage = styled.div`
  /* margin: 0% 2% 0% 5%; */
  position: relative;

  &:hover .overlay {
    height: 100%;
  }

  .flourish {
    max-height: 400px;
  }
  .img {
    display: block;
    width: 100%;
    max-width: 650px;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 0%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.85);
    font-family: "Quicksand", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 25px;

    @media screen and (max-width: 420px) {
      font-size: 12px;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }

  .overlay p {
    /* text-align: center;
    align-items: center;
    color: white;
    font-size: 1.8vw;
    margin: 30% 0 0 18%;
    width: 70%;
    letter-spacing: 5px;
    line-height: 1.5rem; */
  }
`;
