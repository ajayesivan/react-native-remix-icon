import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgOilFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1M6 12v7h2v-7z" />
  </Svg>
);
export default SvgOilFill;
