import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgOilLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.07 7 6 11.606V20h12V7zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1M8 12h2v6H8z" />
  </Svg>
);
export default SvgOilLine;
