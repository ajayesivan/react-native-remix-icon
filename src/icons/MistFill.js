import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMistFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 4h4v2H4zm12 15h4v2h-4zM2 9h10v2H2zm12 0h6v2h-6zM4 14h6v2H4zm8 0h10v2H12zM10 4h12v2H10zM2 19h12v2H2z" />
  </Svg>
);
export default SvgMistFill;
