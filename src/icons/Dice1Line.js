import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDice1Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 5v14h14V5H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm9 9a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgDice1Line;
