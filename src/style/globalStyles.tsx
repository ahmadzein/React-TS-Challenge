import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f8f8f8;
    font-family: "trebuchet ms", trebuchet,Verdana, Geneva, Tahoma, sans-serif;
  }

header {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px ;
  border-bottom: 1px solid grey;
}

nav {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}
nav #mainManue{
    display: flex;
    gap: 15px;
    align-items: center;
}

main {
  display: flex;
  justify-content: center;
  /* width: 100vw; */
}

main section {
  width: 100%;
  max-width: 1200px;
}

button {
  background: #222222;
    color: white;
    font: "trebuchet ms", trebuchet;
    padding: 10px 20px;
    border-radius: 10px;
    border: 0 none;
    font-weight: bold;  
}
`;

export default GlobalStyle;
