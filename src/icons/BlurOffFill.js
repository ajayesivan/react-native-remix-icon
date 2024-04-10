import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBlurOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.432 6.843L1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413-3.038-3.038A9 9 0 015.432 6.843zm2.811-2.817L12 .269l6.364 6.364a9.002 9.002 0 012.05 9.564L8.244 4.026z" />
    </Svg>
  );
}

export default SvgBlurOffFill;
