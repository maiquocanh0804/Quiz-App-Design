import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Gilroy;
  src: url(assets/Font/SVN_Gilroy-Light.woff2);
}
@font-face {
  font-family: Gilroy-Bold;
  src: url(assets/Font/SVN_Gilroy-Bold.woff2);
}

  html {
    height: 100%;
  }

  body {
    background-color: 	#FFFFFF;
    background-size: cover;
    margin: auto;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family:  Gilroy-Bold;
    box-sizing: border-box;
    text:bold;
    color: #343434;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #343434;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Gilroy-Bold;
    font-weight: 500;
    background-size: 100%;
    // filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    color: #faa61a;
    text-align: center;
    margin: 20px;
    line-height: 60px;
  }

  .start,
  .next {
    cursor: pointer;
    //  background: linear-gradient(180deg, #ffffff, #ffcc91);
    //  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

    border-radius: 8px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    background-color: #00aeef;
    color: #fff;
  }

  .start {
    max-width: 200px;
  }
`;
