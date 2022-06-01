import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #363636;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: 969px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 969px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .about-card {
    max-width: 500px;
    border-radius: 12px;
  }

  .title {
    padding-bottom: 20px;
    color: #f1f2f2;
  }

  .subtitle {
    min-width: 300px;
    color: #f1f2f2;
  }

  .section {
    min-width: 325px;
    color: #f1f2f2;
  }

  .header {
    max-width: 600;
    margin-bottom: 30px;
    min-width: 325px;
  }

  .section-img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 700px) {
      padding-bottom: 20px;
    }
  }

  img {
    margin: 10px;
    height: 50px;

    &:hover {
      -webkit-transform: rotateY(360deg);
      transition: 2s ease-out;
    }
  }

  .nodejs {
    height: 80px;
  }
`;
