import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBubbleChartFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 16a3 3 0 110 6 3 3 0 010-6zM6 12a4 4 0 110 8 4 4 0 010-8zm8.5-10a5.5 5.5 0 110 11 5.5 5.5 0 010-11z" />
    </Svg>
  );
}

export default SvgBubbleChartFill;
