import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 780px;
  color-scheme: light dark;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 5px 20px 20px 20px;
  box-shadow: rgb(0 74 90 / 9%) 0px 5px 10px;
  color: #000000;

  p {
    font-size: 15px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #000000;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
