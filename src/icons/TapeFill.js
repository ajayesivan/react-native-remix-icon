import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTapeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10.83 13A3 3 0 1 0 8 15h8a3 3 0 1 0-2.83-2zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m13 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default SvgTapeFill;
