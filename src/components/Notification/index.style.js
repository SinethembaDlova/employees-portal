import styled, { css } from 'styled-components';

const NotificationContainer = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  padding: 10px 20px;
  border-radius: ${(props) => (props.noBorder ? '0px' : '10px')};
  ${(props) => {
    if (props.variant === 'success') {
      return css`
        background: green;
        color: #fff;
      `;
    }
    if (props.variant === 'warning') {
      return css`
        background: yellow;
      `;
    }
    if (props.variant === 'error') {
      return css`
        background: red;
        color: #fff;
      `;
    }
  }};
`;

const IconTextWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextWrapper = styled.div`
  display: flex;
`;

export { NotificationContainer, IconTextWrapper, IconWrapper, TextWrapper };
