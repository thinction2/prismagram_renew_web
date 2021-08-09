import styled from "styled-components";

export const BaseBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid rgba(219, 219, 219);
  width: 100%;
`;

export const FatLink = styled.span`
  font-weight: 600;
  color: rgba(142, 142, 142);
`;
