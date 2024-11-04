import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDualSim2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-.829 2H6v16h12V7.829zM12 7.5a3 3 0 0 1 2.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1 0 11 10.5H9a3 3 0 0 1 3-3" />
  </Svg>
);
export default SvgDualSim2Line;
