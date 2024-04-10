import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBlurOffLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.154 19.565A9 9 0 015.432 6.843L1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413-3.038-3.038zM6.848 8.258a7 7 0 009.89 9.891l-9.89-9.89zm13.566 7.939l-1.598-1.599a6.995 6.995 0 00-1.866-6.55L12 3.097 9.658 5.44 8.243 4.026 12 .269l6.364 6.364a9.002 9.002 0 012.05 9.564z" />
    </Svg>
  );
}

export default SvgBlurOffLine;
