import styled from "styled-components";
import ImageLogo from "../images/logo.svg";
import ImageSlogan from "../images/slogan.svg";

export const StyledHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 44px 51px;
`;

export const Hamburger = styled.div`
  position: relative;
  width: 46px;
  height: 30px;
  cursor: pointer;
`;

export const LogoItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 190px;
    width: 1px;
    height: 37px;
    background-color: #f2f0c9;
  }
`;

export const Logo = styled.div`
  width: 170px;
  height: 40px;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${ImageLogo});
`;

export const Slogan = styled.div`
  width: 216px;
  height: 20px;
  margin-left: 20px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${ImageSlogan});
`;
// shared style
const Line = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: #f2f0c9;
`;

export const Line1 = styled(Line)`
  top: ${(props) => (props.isOpen ? "50%" : "0")};
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: ${(props) =>
    props.isOpen
      ? "top 0.4s ,transform 0.4s 0.4s"
      : "transform 0.4s ,top 0.4s 0.4s"};
`;

export const Line2 = styled(Line)`
  top: 50%;
  opacity: ${(props) => (props.isOpen ? 0 : 1)};
  transition: opacity 0.8s;
`;

export const Line3 = styled(Line)`
  top: ${(props) => (props.isOpen ? "50%" : "100%")};
  transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
  transition: ${(props) =>
    props.isOpen
      ? "top 0.4s ,transform 0.4s 0.4s"
      : "transform 0.4s ,top 0.4s 0.4s"};
`;
