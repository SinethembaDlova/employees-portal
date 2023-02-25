import React from 'react';
import PropTypes from 'prop-types';
import VARIANT from '../../constants/notification';
import { NotificationContainer, IconTextWrapper, IconWrapper, TextWrapper } from './index.style';

const Notification = ({ variant, message, noBorder, ...restProps }) => {
  return (
    <NotificationContainer variant={variant} message={message} noBorder={noBorder} {...restProps}>
      <IconTextWrapper>
        <IconWrapper>
          {variant === VARIANT.success && <i className="material-icons">check</i>}
          {variant === VARIANT.warning && <i className="material-icons">warning</i>}
          {variant === VARIANT.error && <i className="material-icons">error</i>}
        </IconWrapper>
        <TextWrapper>
          <div>{message}</div>
        </TextWrapper>
      </IconTextWrapper>
    </NotificationContainer>
  );
};

Notification.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  noBorder: PropTypes.bool.isRequired,
};

export default Notification;
