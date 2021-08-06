import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  borderColor: "rgba(219,219,219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#2c2c2c",
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
      background-color: #FAFAFA;
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color: rgba(38,38,38);
    }
    a {
      text-decoration: none;
    }
`;
