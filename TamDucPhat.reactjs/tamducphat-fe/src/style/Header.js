import styled from "styled-components";

export const TopHeader = styled.div`
  background-color: #f93d3d;
`;

export const TopBar = styled.div`
  margin: 0;
  padding: 5px 0;
  height: 35px;
`;

export const LeftTopBar = styled.div`
  ul li,
  ul li {
    font-family: "Inter";
    font-size: 13px;
    list-style-type: none;
    display: inline;
    margin-right: 10px;
  }
`;

export const RightTopBar = styled.div`
  ul {
    text-align: right !important;
    padding-right: 1px;
  }
`;

export const Anchor = styled.a`
  color: black;
`;

export const LeftTopBarUl = styled.ul`
  text-align: left !important;
  padding-left: 1px;
  display: flex;
`;

export const RightTopBarUl = styled.ul`
  text-align: right !important;
  padding-right: 1px;
`;
