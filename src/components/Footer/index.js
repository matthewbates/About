import { FooterContainer, FooterWrapper, Copyright } from "./FooterElements";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Copyright>
            Copyright © {new Date().getFullYear()} Matthew Bates. All rights
            reserved.
          </Copyright>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
