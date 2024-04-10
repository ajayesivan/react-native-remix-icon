import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompass3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgCompass3Line;
