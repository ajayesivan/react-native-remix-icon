import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPauseMiniFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M15 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7zM7 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7z" />
  </Svg>
);

export default SvgPauseMiniFill;
