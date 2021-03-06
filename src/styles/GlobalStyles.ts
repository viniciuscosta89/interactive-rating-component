import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  // Scrollbar styles
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--black);
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg);
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-main);
    margin: 0 auto;    
    min-height: 100vh;
    padding: 1rem;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

    &::-webkit-scrollbar {
      width: 6px;

      &-thumb {
        background-color: var(--black);
        border-radius: 10px;
      }
    }
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
  
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

    /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
