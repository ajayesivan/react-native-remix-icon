import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSchoolFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M23 19h-1V9h-4V6.586l-6-6-6 6V9H2v10H1v2h22zM6 19H4v-8h2zm12-8h2v8h-2zm-7 1h2v7h-2z" />
  </Svg>
);
export default SvgSchoolFill;
