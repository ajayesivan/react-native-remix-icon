import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z" />
    </Svg>
  );
}

export default SvgArrowUpLine;
