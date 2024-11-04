import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCollapseHorizontalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m13.5 12 4.95-4.95-.001 3.95H23v2h-4.552v3.947zM1 13h4.55v3.95L10.5 12 5.55 7.05V11H1z" />
  </Svg>
);
export default SvgCollapseHorizontalFill;
