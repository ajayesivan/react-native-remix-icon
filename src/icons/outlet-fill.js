import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgOutletFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m2-12v4h2v-4zm-6 0v4h2v-4z" />
  </Svg>
);
export default SvgOutletFill;
