import React from 'react';
import styled from '@emotion/styled';
import Menu from './Menu';
import { ReactComponent as Logo } from '../assets/logo.svg';
import MenuIcon from './MenuIcon';

const NavigationBar = styled.div`
  width: 100%;
  height: 90px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function handleMenuIconClick() {
    setMenuIsOpen(!menuIsOpen);
    console.log(menuIsOpen);
  }

  return (
    <NavigationBar>
      <Logo />
      <Menu menuIsOpen={menuIsOpen} />
      <MenuIcon onMenuIconClick={handleMenuIconClick} menuIsOpen={menuIsOpen} />
    </NavigationBar>
  );
}

export default Header;
