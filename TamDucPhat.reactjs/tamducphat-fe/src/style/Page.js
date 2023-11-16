import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const PageWrapperContent = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: ${(props) => props.height};
`;
