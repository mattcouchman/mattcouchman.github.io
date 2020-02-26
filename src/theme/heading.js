import { css } from "styled-components"

export default {
  h6: css`
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    text-transform: uppercase;

    @media screen and (min-width: 760px) {
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      line-height: 1.2;
      text-transform: uppercase;
    }
  `,
  h5: css`
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media screen and (min-width: 760px) {
      font-size: 2rem;
      font-weight: bold;
      line-height: 1.2;
    }
  `,
  h4: css`
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media screen and (min-width: 760px) {
      font-size: 2.4rem;
      font-weight: bold;
      line-height: 1.2;
    }
  `,
  h3: css`
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media screen and (min-width: 760px) {
      font-size: 3.6rem;
      font-weight: bold;
      line-height: 1.2;
    }
  `,
  h2: css`
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media screen and (min-width: 760px) {
      font-size: 4.6rem;
      font-weight: bold;
      line-height: 1.2;
    }
  `,
  h1: css`
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 2rem;

    @media screen and (min-width: 760px) {
      font-size: 6rem;
      font-weight: bold;
      line-height: 1.2;
    }
  `,
}
