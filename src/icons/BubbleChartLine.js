import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBubbleChartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 16a3 3 0 110 6 3 3 0 010-6zM6 12a4 4 0 110 8 4 4 0 010-8zm10 6a1 1 0 100 2 1 1 0 000-2zM6 14a2 2 0 100 4 2 2 0 000-4zm8.5-12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </Svg>
  );
}

export default SvgBubbleChartLine;
