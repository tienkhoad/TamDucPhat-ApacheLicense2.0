import styled from "styled-components";

export const ScrollToTopWrapper = styled.div`
  position: fixed;
  bottom: 2px;
  right: 23px;
  z-index: 9999999999;
  background-color: transparent;
`;

export const ScrollToTopButton = styled.div`
  opacity: ${(props) => props.opacity};
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
