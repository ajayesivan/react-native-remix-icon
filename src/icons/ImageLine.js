import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgImageLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </Svg>
);
export default SvgImageLine;
