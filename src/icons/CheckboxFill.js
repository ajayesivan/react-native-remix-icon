import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCheckboxFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7.003 13 7.07-7.071-1.413-1.414-5.657 5.657-2.829-2.829-1.414 1.414z" />
  </Svg>
);
export default SvgCheckboxFill;
