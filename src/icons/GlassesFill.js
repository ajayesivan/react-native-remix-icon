import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGlassesFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 12a5 5 0 018.192-3.848A3.987 3.987 0 0112 7c1.095 0 2.086.44 2.808 1.152a5 5 0 11-1.264 1.578A1.996 1.996 0 0012 9c-.62 0-1.177.283-1.544.73A5 5 0 111 12z" />
    </Svg>
  );
}

export default SvgGlassesFill;
