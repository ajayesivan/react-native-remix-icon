import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCornerLeftUpFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M10 19h9v-2h-7V9.414h5.414L11 3 4.586 9.414H10z" />
  </Svg>
);
export default SvgCornerLeftUpFill;
