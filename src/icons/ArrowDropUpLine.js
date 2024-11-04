import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropUpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 11.828l-2.828 2.829-1.415-1.414L12 9l4.243 4.243-1.415 1.414L12 11.828z" />
    </Svg>
  );
}

export default SvgArrowDropUpLine;
