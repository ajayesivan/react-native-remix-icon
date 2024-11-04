import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandUpDownLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.207 9.043L12 2.836 5.793 9.043l1.414 1.414L12 5.664l4.793 4.793 1.414-1.414zM5.793 14.957L12 21.164l6.207-6.207-1.414-1.414L12 18.336l-4.793-4.793-1.414 1.414z" />
    </Svg>
  );
}

export default SvgExpandUpDownLine;
