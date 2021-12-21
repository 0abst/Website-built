import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/JonathanLehner/SolarOracle"
      data-icon=""
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/JonathanLehner/SolarOracle"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label=""
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
