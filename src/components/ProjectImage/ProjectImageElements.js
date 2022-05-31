import styled from "styled-components";

export const StyledProjectImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0% 2% 0% 5%;
  @media (max-width: 900px) {
    margin: 0% 2% 0% 2%;
  }
  :hover {
    filter: brightness(50%);
  }
  .flourish {
    max-height: 400px;
  }
  .img {
    max-width: 600px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    @media (max-width: 900px) {
      max-width: 400px;
      padding-left: 0px;
    }
    @media (max-width: 525px) {
      max-width: 340px;
    }
  }
`;
