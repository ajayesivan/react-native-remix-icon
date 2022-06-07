import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCheckLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m10 15.172 9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
  </Svg>
);

export default SvgCheckLine;
