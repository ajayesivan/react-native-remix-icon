import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMvLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v14h16V5zm8 7.17V6h5v2h-3v7a3 3 0 1 1-2-2.83" />
  </Svg>
);
export default SvgMvLine;
