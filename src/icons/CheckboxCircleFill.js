import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckboxCircleFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m5.457-12.543L11 15.914l-4.207-4.207 1.414-1.414L11 13.086l5.043-5.043z" />
  </Svg>
);
export default SvgCheckboxCircleFill;
