import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPuzzleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 5a4 4 0 118 0h3a1 1 0 011 1v3a4 4 0 010 8v3a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h3zm4-2a2 2 0 00-1.886 2.667A1 1 0 018.17 7H5v12h12v-3.17a1 1 0 011.333-.944 2 2 0 100-3.773A1 1 0 0117 10.171V7h-3.17a1 1 0 01-.944-1.333A2 2 0 0011 3z" />
    </Svg>
  );
}

export default SvgPuzzleLine;
