import styled from "styled-components";
import imageBtnList from "../images/btn-list.svg";
import imageBtnChart from "../images/btn-chart.svg";
import imageBtnConfig from "../images/btn-config.svg";

export const StyledNavControl = styled.nav`
  position: absolute;
  top: 50%;
  right: 50px;
  margin-top: -139px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: ${(props) =>
    props.isOpen ? "translateX(-816px)" : "translateX(0)"};
  transition: all 1s;
`;

// share style
const BtnNavControl = styled.div`
  width: 62px;
  height: 62px;
  margin: 10px 0;
  border: 1px solid rgba(242, 240, 201, 0.5);
  border-radius: 50%;
  cursor: pointer;
  background-position: center;
  background-size: 35%;
  background-repeat: no-repeat;
  background-color: ${(props) => (props.isCurrent ? "#d9343f" : "#bc2a35")};
  &:hover {
    background-color: #d9343f;
  }
`;

export const BtnList = styled(BtnNavControl)`
  background-image: url(${imageBtnList});
`;

export const BtnChart = styled(BtnNavControl)`
  background-image: url(${imageBtnChart});
`;

export const BtnConfig = styled(BtnNavControl)`
  background-image: url(${imageBtnConfig});
`;
