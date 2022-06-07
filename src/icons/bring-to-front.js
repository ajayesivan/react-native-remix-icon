import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBringToFront = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M11 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7zm5 5H8v8h8V8z" />
  </Svg>
);

export default SvgBringToFront;
