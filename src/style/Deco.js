import styled from "styled-components";
import imageDeco1 from "../images/deco1.svg";
import imageDeco2 from "../images/deco2.svg";
import imageDeco3 from "../images/deco3.svg";
import imageDeco4 from "../images/deco4.svg";

// share style
const Deco = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Deco1 = styled(Deco)`
  left: 26.61%;
  top: 0;
  width: 305px;
  height: 130px;
  background-image: url(${imageDeco1});
`;

export const Deco2 = styled(Deco)`
  right: 12.5%;
  bottom: 0;
  width: 464px;
  height: 198px;
  background-image: url(${imageDeco2});
`;

export const Deco3 = styled(Deco)`
  left: 0;
  bottom: 182px;
  width: 358px;
  height: 716px;
  background-image: url(${imageDeco3});
`;

export const Deco4 = styled(Deco)`
  right: 0;
  top: 50%;
  width: ${(props) => (props.isOpen ? "900px" : "358px")};
  height: ${(props) => (props.isOpen ? "1800px" : "716px")};
  transform: ${(props) =>
    props.isOpen ? "translateY(-50%)" : "translateY(-50%)"};
  background-image: url(${imageDeco4});
  transition: all 1s;
`;
