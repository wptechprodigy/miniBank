import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function MenuNav() {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => {
    if (name) {
      setActiveItem(name);
    }
  };

  return (
    <Menu>
      <Container>
        <Menu.Item
          header
          name="miniBank"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to={'/'}
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to={'/login'}
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to={'/register'}
          />
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
