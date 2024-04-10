import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnifeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22.374 19.44a1.5 1.5 0 11-2.121 2.12l-4.596-4.595L12.12 20.5l-7.778-7.778A8 8 0 014.17 1.587l.173-.179L22.374 19.44z" />
    </Svg>
  );
}

export default SvgKnifeFill;
