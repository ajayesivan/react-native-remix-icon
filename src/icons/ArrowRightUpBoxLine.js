import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightUpBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM5 19V5h14v14H5zM16 8v8h-2v-4.586l-5.293 5.293-1.414-1.414L12.586 10H8V8h8z" />
    </Svg>
  );
}

export default SvgArrowRightUpBoxLine;
