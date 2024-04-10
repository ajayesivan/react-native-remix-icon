import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemTopLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3H3v2h18V3zm-6 6v6h3V9h-3zm-2-1a1 1 0 011-1h5a1 1 0 011 1v8a1 1 0 01-1 1h-5a1 1 0 01-1-1V8zM9 9v10H6V9h3zM5 7a1 1 0 00-1 1v12a1 1 0 001 1h5a1 1 0 001-1V8a1 1 0 00-1-1H5z" />
    </Svg>
  );
}

export default SvgAlignItemTopLine;
