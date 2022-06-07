import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBubbleChartLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm10 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 14a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 14zm8.5-12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 1 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
  </Svg>
);

export default SvgBubbleChartLine;
