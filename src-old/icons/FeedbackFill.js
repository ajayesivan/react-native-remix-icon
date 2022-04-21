import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFeedbackFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 13v2h2v-2h-2zm0-6v5h2V7h-2z" />
    </Svg>
  );
}

export default SvgFeedbackFill;
