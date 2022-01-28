import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;  
  overflow: #FBF3E4;
}



a{
  text-decoration: none;
  list-style-type: none;
}

Link{
  text-decoration: none;
  list-style-type: none;
}

body{
  background: #67A9B2;
  position: center;
  min-height: 100vh;
  width: 100%;
  text-decoration: none;
  font-family: Lato, Arial, Helvetica, sans-serif;
}

h1 {
  color: white;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-family: Lato, Arial, Helvetica, sans-serif;
}

hr{
  color: #FBF3E4;
}

h2 {
  margin-bottom: 1rem;
  color: #FBF3E4;
}

section {
  margin-bottom: 4rem;
  padding: 1rem;
  background: #3A6351;
  border-radius: 8px;
}

.contenedor-jugadores {
  overflow: auto;
  padding-bottom: 2rem;
}

section > div:not(.cancha):not(.contenedor-jugadores) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(6, 1fr);
  }
}

article img {
  --size: 4.5rem;
  width: var(--size);
  height: var(--size);
  object-fit: cover;
  border-radius: 100%;
  margin-bottom: var(--spacing);
}

`;

export default GlobalStyle;