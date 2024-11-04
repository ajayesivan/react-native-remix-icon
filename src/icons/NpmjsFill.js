import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNpmjsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.001 3a1 1 0 011 1v16a1 1 0 01-1 1h-16a1 1 0 01-1-1V4a1 1 0 011-1h16zm-3 4h-10v10h5V9.5h2.5V17h2.5V7z" />
    </Svg>
  );
}

export default SvgNpmjsFill;
