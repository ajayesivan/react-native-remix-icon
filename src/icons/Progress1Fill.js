import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProgress1Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-10V6a5.98 5.98 0 014.243 1.757L12 12z" />
    </Svg>
  );
}

export default SvgProgress1Fill;
