import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGuideLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1zM5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </Svg>
);

export default SvgGuideLine;
