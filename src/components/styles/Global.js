import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap'); */


*{
  box-sizing: border-box;
  padding:0;
  margin:0;
  scroll-behavior:smooth;
}

body {
  font-family: 'Roboto Slab', serif;
  color:${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bg};
  overflow-x:hidden;
  overflow:${({ theme }) => theme.overflow};
  
}

a{
  text-decoration: none;
  color:black;
  }

p{
  font-size:${({ theme }) => theme.fontSize}
}


h4{
  font-size:${({ theme }) => theme.titleSize}

}

`;

export default GlobalStyles;
