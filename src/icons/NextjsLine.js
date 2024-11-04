import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNextjsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.664 17.65L10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 111.578-1.23zM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm2-10V8h2v4h-2z" />
    </Svg>
  );
}

export default SvgNextjsLine;
