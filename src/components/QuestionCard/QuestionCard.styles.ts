import styled from 'styled-components';

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

    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #03d362, #03d362)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ed145b, #ed145b)'
        : 'linear-gradient(90deg, #00aeef, #00aeef)'};
  }
`;
