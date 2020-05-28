import React, { memo } from "react";
import {
  StyledHeaderSection,
  Hamburger,
  LogoItem,
  Logo,
  Slogan,
  Line1,
  Line2,
  Line3,
} from "../style/Header";

const Header = ({ isOpen = false, onToggleMenu }) => {
  return (
    <StyledHeaderSection>
      <LogoItem>
        <Logo />
        <Slogan />
      </LogoItem>
      <Hamburger onClick={onToggleMenu}>
        <Line1 isOpen={isOpen} />
        <Line2 isOpen={isOpen} />
        <Line3 isOpen={isOpen} />
      </Hamburger>
    </StyledHeaderSection>
  );
};

export default memo(Header);
