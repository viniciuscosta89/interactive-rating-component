import { css } from "styled-components";

const Variables = css`
  :root {
    // Font
    --font-main: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    // Font size
    --fz-xxs: 0.25rem;
    --fz-xs: 0.5rem;
    --fz-sm: 0.75rem;
    --fz-md: 1rem;
    --fz-lg: 1.25rem;
    --fz-xl: 1.5rem;
    --fz-xxl: 2rem;

    // Colors
    --primary: #fc7614;
    --white: #fff;
    --black: #000;
    --bg: #141519;
    --gray: #ccc;
    --blue: #057dcd;

    // Other
    --max-width: 1500px;
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
