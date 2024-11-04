import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHospitalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8 20v-6h8v6h3V4H5v16zm2 0h4v-4h-4zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8z" />
  </Svg>
);
export default SvgHospitalLine;
