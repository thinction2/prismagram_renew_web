import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#FAFAFA",
  fontColor: "rgba(38,38,38)",
  borderColor: "rgba(219,219,219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#000",
};

export const GloabalStyles = createGlobalStyle`
    ${reset};
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
      background-color: ${(props) => props.theme.bgColor};
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color: ${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;
