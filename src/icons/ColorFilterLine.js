import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgColorFilterLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 3a4 4 0 0 1 3.696 5.533 6 6 0 0 0-4.216 2.434A4 4 0 0 1 8 7a4 4 0 0 1 4-4m5.764 5.672a6 6 0 1 0-11.527 0A6 6 0 1 0 12 18.655a6 6 0 1 0 5.764-9.983m-4.61 8.262a6 6 0 0 0 0-4.867 4.001 4.001 0 1 1 0 4.867m-1.79-3.967a4.001 4.001 0 1 1-4.214-2.434 6 6 0 0 0 4.215 2.434" />
  </Svg>
);
export default SvgColorFilterLine;
