import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgProfileLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21.008 3c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM20 5H4v14h16zm-2 10v2H6v-2zm-6-8v6H6V7zm6 4v2h-4v-2zm-8-2H8v2h2zm8-2v2h-4V7z" />
  </Svg>
);
export default SvgProfileLine;
