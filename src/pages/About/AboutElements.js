import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: gainsboro;
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
  }
  .subtitle {
    min-width: 300px;
  }
  .section {
    min-width: 325px;
  }
  .header {
    max-width: 600;
    margin-bottom: 30px;
    min-width: 325px;
  }
  .section-img {
    @media (max-width: 700px) {
      padding-bottom: 20px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  img {
    margin: 10px;
    height: 40px;
  }
  .nodejs {
    height: 80px;
  }
`;
