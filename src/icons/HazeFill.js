import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHazeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6.083 13a6 6 0 1 1 11.834 0zM2 15h10v2H2zm12 0h8v2h-8zm2 4h4v2h-4zM4 19h10v2H4zm7-18h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM19.07 3.515l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z" />
  </Svg>
);
export default SvgHazeFill;
