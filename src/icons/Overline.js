import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgOverline = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.246 18H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 9.885 9.554 16zM4 3h16v2H4z" />
  </Svg>
);
export default SvgOverline;
