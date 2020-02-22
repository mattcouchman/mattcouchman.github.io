import { css } from "styled-components"

export default {
  xs: css`
    font-size: 1rem;
    line-height: 1.5;

    @media screen and (min-width: 760px) {
      font-size: 1rem;
      line-height: 1.5;
    }
  `,
  sm: css`
    font-size: 1.4rem;
    line-height: 1.5;

    @media screen and (min-width: 760px) {
      font-size: 1.4rem;
      line-height: 1.5;
    }
  `,
  rg: css`
    font-size: 1.6rem;
    line-height: 1.5;

    @media screen and (min-width: 760px) {
      font-size: 1.6rem;
      line-height: 1.5;
    }
  `,
  lg: css`
    font-size: 1.8rem;
    line-height: 1.5;

    @media screen and (min-width: 760px) {
      font-size: 1.8rem;
      line-height: 1.5;
    }
  `,
  xl: css`
    font-size: 2.4rem;
    line-height: 1.5;

    @media screen and (min-width: 760px) {
      font-size: 2.4rem;
      line-height: 1.5;
    }
  `,
}
