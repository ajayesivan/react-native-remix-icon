import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDropRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242-1.415-1.414L12.172 12z" />
    </Svg>
  );
}

export default SvgArrowDropRightLine;
