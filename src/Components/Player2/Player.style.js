import styled from "styled-components";

const HoverTrash = styled.div`
  & .test {
    display: none;
  }

  &:hover .test {
    background-color: red;
    display: block;
    cursor: pointer;
  }
`;

export default HoverTrash;
