import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarcodeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 4h2v16H2zm4 0h2v16H6zm3 0h3v16H9zm4 0h2v16h-2zm3 0h2v16h-2zm3 0h3v16h-3z" />
  </Svg>
);
export default SvgBarcodeFill;
