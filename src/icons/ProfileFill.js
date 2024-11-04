import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgProfileFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM6 15v2h12v-2zm0-8v6h6V7zm8 0v2h4V7zm0 4v2h4v-2zM8 9h2v2H8z" />
  </Svg>
);
export default SvgProfileFill;
