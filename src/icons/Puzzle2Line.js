import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPuzzle2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 5a4 4 0 118 0h5a1 1 0 011 1v4.17a1 1 0 01-1.333.944 2 2 0 100 3.773 1 1 0 011.333.942V20a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h3zm4-2a2 2 0 00-1.886 2.667A1 1 0 018.17 7H5v12h14v-2a4 4 0 010-8V7h-5.17a1 1 0 01-.944-1.333A2 2 0 0011 3z" />
    </Svg>
  );
}

export default SvgPuzzle2Line;
