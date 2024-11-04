import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSpeedMiniLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.032 12 6 9.86v4.28zm-4.244 5.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM15 14.14 18.032 12 15 9.86zm-2-7.175a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z" />
  </Svg>
);
export default SvgSpeedMiniLine;
