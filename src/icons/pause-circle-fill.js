import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPauseCircleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M9 9v6h2V9zm4 0v6h2V9z" />
  </Svg>
);
export default SvgPauseCircleFill;
