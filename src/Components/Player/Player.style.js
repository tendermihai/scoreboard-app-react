import styled from "styled-components";

const HoverTrash = styled.div`
  background-color: coral;
  transform: translate(-50%, -50%);
  transition: opacity 0.3 ease;

  ${HoverTrash}:hover & {
    opacity: 1;
  }
`;

export default HoverTrash;
