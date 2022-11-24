import React, { useState, useEffect } from "react";
import {
  FooterContainer,
  FooterWrapper,
  SocialIcons,
  SocialIconLink,
  CreditWrapper,
  Credit
} from "./FooterElements";
import Copyright from "../Copyright";
import Socials from "../Socials";

export default function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/matthewbates/about")
      .then((r) => r.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <Socials />
          <Copyright />
          <CreditWrapper>
            <a
              href="https://www.github.com/matthewbates/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Credit>Designed &amp; Built by Matthew Bates</Credit>
            </a>
          </CreditWrapper>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
