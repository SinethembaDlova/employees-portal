import React, { useState } from 'react';
import {
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink
} from './index.style';

const Sidebar = props => {
  var items = ['Employees'];
  var pages = ['employees'];
  var icons = ['group'];
  const [isActive, setActive] = useState(null);

  const toggleClass = index => {
    setActive(index);
  };

  return (
    <SidebarContainer act={props.toggle}>
      <SidebarMenuContainer>
        <div>
          {items.map(function (item, index) {
            var strClass = '';
            if (isActive === index) {
              console.log(index);
              strClass = 'active';
            } else {
              strClass = 'Noactive';
            }
            return (
              <StyledNavLink
                to={'/' + pages[index]}
                className={strClass}
                key={index}
                onClick={() => toggleClass(index)}
              >
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

export default Sidebar;
