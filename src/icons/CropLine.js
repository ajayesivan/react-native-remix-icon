import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCropLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15zm2 5V7H9V5h9a1 1 0 0 1 1 1v11h3v2h-3v3z" />
  </Svg>
);
export default SvgCropLine;
