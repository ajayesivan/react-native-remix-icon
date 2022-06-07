import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgArrowLeftSFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m8 12 6-6v12z" />
  </Svg>
);

export default SvgArrowLeftSFill;
