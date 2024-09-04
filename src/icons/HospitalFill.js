import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHospitalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 8H9v2h2v2h2v-2h2V8h-2V6h-2zm3 12h2v-6H8v6h2v-4h4z" />
  </Svg>
);
export default SvgHospitalFill;
