import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  height: 33px;
  width: 120px;
  background-color: lightGrey;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 20px;
  &:hover {
    border-color: gold;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 18%,
      rgba(253, 187, 45, 1) 100%
    );
  }
`;