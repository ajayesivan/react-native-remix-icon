import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDualSim1Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-.829 2H6v16h12V7.829zM13 16h-2v-6h-1V8h3z" />
  </Svg>
);
export default SvgDualSim1Line;
