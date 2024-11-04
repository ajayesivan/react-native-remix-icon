import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandDiagonal2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.414 5H10V3H3v7h2V6.414l4.293 4.293 1.414-1.414L6.414 5zM21 14h-2v3.586l-4.293-4.293-1.414 1.414L17.586 19H14v2h7v-7z" />
    </Svg>
  );
}

export default SvgExpandDiagonal2Line;
