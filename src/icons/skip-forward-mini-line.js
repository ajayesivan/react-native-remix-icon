import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSkipForwardMiniLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12.032 12 9 9.86v4.28L12.032 12zM7.5 17.535a.5.5 0 0 1-.5-.5V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.288.091zM16 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7z" />
  </Svg>
);

export default SvgSkipForwardMiniLine;
