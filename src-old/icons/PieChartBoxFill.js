import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChartBoxFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm13.9 10H11V7.1a5.002 5.002 0 001 9.9 5.002 5.002 0 004.9-4zm0-2A5.006 5.006 0 0013 7.1V11h3.9z" />
    </Svg>
  );
}

export default SvgPieChartBoxFill;
