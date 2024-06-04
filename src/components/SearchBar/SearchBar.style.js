import styled from "styled-components";

export const ButtonInput = styled.button`
  height: 33px;
  width: 90px;
  background-color: lightGrey;
  color: darkBlack;
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

export const Input = styled.input`
background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 18%,
      rgba(253, 187, 45, 1) 100%
    );
border-radius: 4px;
border: 1px solid black;
width: 300px;
color: black;
height: 30px;
font-size: 20px;
margin-right: 20px;
padding:0 10px;
&:hover {
    background: lightGrey;
  };
&:focus {
    background: lightGrey;
}
  `;