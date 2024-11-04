import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowRightDownBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM5 19V5h14v14H5zm11-3H8v-2h4.586L7.293 8.707l1.414-1.414L14 12.586V8h2v8z" />
    </Svg>
  );
}

export default SvgArrowRightDownBoxLine;
