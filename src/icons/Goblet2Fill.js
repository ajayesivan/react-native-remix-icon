import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGoblet2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.133 2L5.011 9.859c-.303 2.114.521 3.93 1.88 5.188 1.105 1.022 2.568 1.685 4.11 1.887V20H6v2h12v-2h-5v-3.066c1.54-.202 3.004-.865 4.109-1.888 1.359-1.257 2.182-3.073 1.88-5.187L17.868 2H6.133zM10 7c-.83 0-1.838.242-2.629.476L7.868 4h8.265l.49 3.431C15.785 7.707 14.89 8 14 8c-1.392 0-2.572-1-4-1z" />
    </Svg>
  );
}

export default SvgGoblet2Fill;
