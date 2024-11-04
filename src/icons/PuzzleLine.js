import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPuzzleLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M7 5a4 4 0 1 1 8 0h3a1 1 0 0 1 1 1v3a4 4 0 0 1 0 8v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4-2a2 2 0 0 0-1.886 2.667A1 1 0 0 1 8.17 7H5v12h12v-3.17a1 1 0 0 1 1.333-.944Q18.646 15 19 15a2 2 0 1 0-.667-3.886A1 1 0 0 1 17 10.17V7h-3.17a1 1 0 0 1-.944-1.333Q13 5.355 13 5a2 2 0 0 0-2-2" />
  </Svg>
);
export default SvgPuzzleLine;
