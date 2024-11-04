import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandHorizontalFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m.5 12 4.95-4.95L5.449 11H10v2H5.448v3.947zM14 13h4.55v3.95L23.5 12l-4.95-4.95V11H14z" />
  </Svg>
);
export default SvgExpandHorizontalFill;
