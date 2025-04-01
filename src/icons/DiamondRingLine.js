import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDiamondRingLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.465 1 7.69 3.661l1.865 1.696a8.5 8.5 0 1 0 4.889 0l1.864-1.696L14.535 1zM12 7a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m-1.69-3.661L10.534 3h2.93l.226.339L12 4.876z" />
  </Svg>
);
export default SvgDiamondRingLine;
