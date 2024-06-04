import styled from "styled-components";

export const Image = styled.img`
  object-fit: cover;
  display: inline-block;
  height: 100%;
  width: 100%;
  transition: 0.3s ease-in-out;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    ${Image} {
      transform: scale(1.1);
    }
  }
`;