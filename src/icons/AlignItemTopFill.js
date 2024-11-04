import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemTopFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3H3v2h18V3zm-7 4a1 1 0 00-1 1v8a1 1 0 001 1h5a1 1 0 001-1V8a1 1 0 00-1-1h-5zM4 8a1 1 0 011-1h5a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V8z" />
    </Svg>
  );
}

export default SvgAlignItemTopFill;
