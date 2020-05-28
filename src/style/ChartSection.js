import styled from "styled-components";

export const StyledChartSection = styled.div`
  position: absolute;
  top: 170px;
  right: 50px;
  width: 604px;
  height: 700px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(680px)"};
  transition: transform 1s;
`;

export const MissionResult = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const MissionResultItem = styled.div`
  margin: 0 45px;
`;

export const ItemTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #f2f0c9;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
`;

export const ItemContext = styled.p`
  font-size: 60px;
  color: #f2f0c9;
  text-align: center;
  margin: 0;
`;

export const ChartResultWrapper = styled.div`
  padding: 0 50px;
`;

export const ChartResultCanvas = styled.canvas.attrs({
  width: "500",
  height: "500",
})``;
