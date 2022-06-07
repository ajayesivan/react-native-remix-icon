import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSpeedMiniLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M9.032 12 6 9.86v4.28L9.032 12zm-4.244 5.444A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036zM15 14.14 18.032 12 15 9.86v4.28zm-2-7.175a.5.5 0 0 1 .788-.409l7.133 5.036a.5.5 0 0 1 0 .816l-7.133 5.036a.5.5 0 0 1-.788-.409V6.965z" />
  </Svg>
);

export default SvgSpeedMiniLine;
