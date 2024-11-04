import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m3 8 6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993zm7-4.5L4.5 9H10z" />
  </Svg>
);
export default SvgFileFill;
