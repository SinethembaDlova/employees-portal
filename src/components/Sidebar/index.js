import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink,
  LogoContainer,
} from './index.style';

const Sidebar = ({ toggle }) => {
  const items = ['Employees'];
  const pages = ['employees'];
  const icons = ['group'];
  const [isActive, setActive] = useState(null);

  const toggleClass = (index) => {
    setActive(index);
  };

  return (
    <SidebarContainer act={toggle}>
      <SidebarMenuContainer>
        <div>
          <LogoContainer id="item" to="/">
            <img src="https://logodix.com/logo/1931246.png" alt=""></img>
          </LogoContainer>

          {items.map((item, index) => {
            let strClass = '';
            if (isActive === index) {
              strClass = 'active';
            } else {
              strClass = 'Noactive';
            }
            return (
              <StyledNavLink
                to={`/${pages[index]}`}
                className={strClass}
                key={index}
                onClick={() => toggleClass(index)}>
                <i className="material-icons">{icons[index]}</i>
                <span>{item}</span>
              </StyledNavLink>
            );
          })}
        </div>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  toggle: PropTypes.bool,
};

export default Sidebar;
