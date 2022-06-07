import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFunctions = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m5 18 7.68-6L5 6V4h14v2H8.263L16 12l-7.737 6H19v2H5v-2z" />
  </Svg>
);

export default SvgFunctions;
