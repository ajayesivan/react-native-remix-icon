import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPageSeparator(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 21v-4H7v4H5v-5a1 1 0 011-1h12a1 1 0 011 1v5h-2zM7 3v4h10V3h2v5a1 1 0 01-1 1H6a1 1 0 01-1-1V3h2zM2 9l4 3-4 3V9zm20 0v6l-4-3 4-3z" />
    </Svg>
  );
}

export default SvgPageSeparator;
