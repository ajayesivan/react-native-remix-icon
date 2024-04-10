import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMarkPenFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.95 2.39l5.657 5.657a1 1 0 010 1.414l-7.778 7.778-2.122.707-1.414 1.415a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 010-1.414L6.05 12.29l.707-2.122 7.779-7.778a1 1 0 011.414 0zm.707 3.536l-6.364 6.364 1.414 1.414 6.364-6.364-1.414-1.414zM4.283 16.886l2.828 2.828-1.414 1.415-4.243-1.415 2.829-2.828z" />
    </Svg>
  );
}

export default SvgMarkPenFill;
