import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForward5Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.477 2 12 2a9.977 9.977 0 017.553 3.446L22 3v6h-6l2.135-2.135A8 8 0 1020 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12zm12.5-2V8.5h-5v4.25h3.125a.625.625 0 110 1.25H9.5v1.5h3.125a2.125 2.125 0 000-4.25H11V10h3.5z" />
    </Svg>
  );
}

export default SvgForward5Fill;
