import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHammerFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 8V2h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-2 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8H2.5V6.074a1 1 0 0 1 .496-.863L8.5 2H15z" />
  </Svg>
);
export default SvgHammerFill;
