import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowTurnForwardLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 5.828V13a6 6 0 01-12 0V4H3v9a8 8 0 1016 0V5.828l2.536 2.536L22.95 6.95 18 2l-4.95 4.95 1.415 1.414L17 5.828z" />
    </Svg>
  );
}

export default SvgArrowTurnForwardLine;
