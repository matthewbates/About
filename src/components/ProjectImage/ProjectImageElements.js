import styled from "styled-components";

export const StyledProjectImage = styled.div`
  /* margin: 0% 2% 0% 5%; */
  position: relative;

  &:hover .overlay {
    height: 100%;
  }
  /* flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0% 2% 0% 5%;
  @media (max-width: 900px) {
    margin: 0% 2% 0% 2%;
  }
  :hover {
    filter: brightness(50%);
  } */
  .flourish {
    max-height: 400px;
  }
  .img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 600px;
    /* border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    @media (max-width: 900px) {
      max-width: 400px;
      padding-left: 0px;
    }
    @media (max-width: 525px) {
      max-width: 340px;
    } */
  }

  .overlay {
    color: white;
    object-position: center;
    font-weight: bold;
    font-size: 2.5vw;
    margin-top: 50px;
    /* position: absolute; */
    text-align: center;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.85);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
`;
