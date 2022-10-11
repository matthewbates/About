import React, { useState, useEffect } from "react";
import {
  FooterContainer,
  FooterWrapper,
  SocialIcons,
  SocialIconLink,
  FooterCredit,
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
          <FooterCredit>
            <a
              href="https://www.github.com/matthewbates/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Designed &amp; Built by Matthew Bates</div>
            </a>
          </FooterCredit>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}
