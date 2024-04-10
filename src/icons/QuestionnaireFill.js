import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuestionnaireFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 14v2h2v-2h-2zM8.567 8.813l1.962.393A1.5 1.5 0 1112 11h-1v2h1a3.5 3.5 0 10-3.433-4.187z" />
    </Svg>
  );
}

export default SvgQuestionnaireFill;
