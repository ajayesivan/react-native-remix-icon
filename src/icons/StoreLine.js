import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStoreLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 11.646V21a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.354A3.985 3.985 0 012 9V3a1 1 0 011-1h18a1 1 0 011 1v6c0 1.014-.378 1.94-1 2.646zm-2 1.228a4.01 4.01 0 01-4-1.228A3.99 3.99 0 0112 13a3.99 3.99 0 01-3-1.354 3.99 3.99 0 01-4 1.228V20h14v-7.126zM14 9a1 1 0 112 0 2 2 0 104 0V4H4v5a2 2 0 104 0 1 1 0 012 0 2 2 0 104 0z" />
    </Svg>
  );
}

export default SvgStoreLine;
