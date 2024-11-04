import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRoadMapLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 01.697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 01-.697-.46V7l2-.857zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 118.486 0zM12 12.657l2.828-2.829a4 4 0 10-5.656 0L12 12.657z" />
    </Svg>
  );
}

export default SvgRoadMapLine;
