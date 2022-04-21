import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChartFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm2 0A10.003 10.003 0 0121.95 11H13V2.05z" />
    </Svg>
  );
}

export default SvgPieChartFill;
