import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTornadoFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 3h20v2H2zm2 4h16v2H4zm4 4h14v2H8zm2 4h8v2h-8zm-2 4h6v2H8z" />
  </Svg>
);
export default SvgTornadoFill;
