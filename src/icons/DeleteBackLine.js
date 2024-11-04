import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDeleteBackLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m.535 2-4.667 7 4.667 7H20V5zM16 11v2H9v-2z" />
  </Svg>
);
export default SvgDeleteBackLine;
