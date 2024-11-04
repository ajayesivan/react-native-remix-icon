import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCornerUpRightLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 10v9h2v-7h10.172l-3.95 3.95 1.414 1.414L21 11l-6.364-6.364-1.414 1.414 3.95 3.95z" />
  </Svg>
);
export default SvgCornerUpRightLine;
