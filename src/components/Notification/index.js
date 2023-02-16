import React from 'react';
import PropTypes from 'prop-types';
import { VARIANT } from '../../constants';
import { NotificationContainer, IconTextWrapper, IconWrapper, TextWrapper } from './index.style';

const Alert = ({ variant, message, noBorder, ...restProps }) => {
  return (
    <NotificationContainer variant={variant} message={message} noBorder={noBorder} {...restProps}>
      <IconTextWrapper>
        <IconWrapper>
          {variant === VARIANT.SUCCESS && <i className="material-icons">check circle</i>}
          {variant === VARIANT.WARNING && <i className="material-icons">warning</i>}
          {variant === VARIANT.ERROR && <i className="material-icons">error</i>}
        </IconWrapper>
        <TextWrapper>
          <div>{message}</div>
        </TextWrapper>
      </IconTextWrapper>
    </NotificationContainer>
  );
};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  noBorder: PropTypes.bool.isRequired,
};

export default Alert;
