import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastDropFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .269l6.364 6.364a9 9 0 11-12.728 0L12 .269zm0 2.828l-4.95 4.95a7 7 0 004.954 11.95L12 3.097z" />
    </Svg>
  );
}

export default SvgContrastDropFill;
