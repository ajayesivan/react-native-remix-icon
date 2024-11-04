import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartHorizontalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 3v4H3V3zm4 14v4H3v-4zm6-7v4H3v-4z" />
  </Svg>
);
export default SvgBarChartHorizontalFill;
