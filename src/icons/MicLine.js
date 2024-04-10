import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3a3 3 0 00-3 3v4a3 3 0 106 0V6a3 3 0 00-3-3zm0-2a5 5 0 015 5v4a5 5 0 01-10 0V6a5 5 0 015-5zM3.055 11H5.07a7.002 7.002 0 0013.858 0h2.016A9.004 9.004 0 0113 18.945V23h-2v-4.055A9.004 9.004 0 013.055 11z" />
    </Svg>
  );
}

export default SvgMicLine;
