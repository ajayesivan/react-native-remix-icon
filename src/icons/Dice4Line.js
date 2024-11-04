import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDice4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 5v14H5V5h14zM5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm11.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM9 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm4.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgDice4Line;
