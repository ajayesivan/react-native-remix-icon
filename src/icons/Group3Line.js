import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGroup3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.5 7a2 2 0 11-4 0 2 2 0 014 0zm-6 0a4 4 0 108 0 4 4 0 00-8 0zM9 16.5a2.5 2.5 0 00-5 0V19h5v-2.5zm2 4.5H2v-4.5a4.5 4.5 0 119 0V21zm8.5-14a2 2 0 11-4 0 2 2 0 014 0zm-6 0a4 4 0 108 0 4 4 0 00-8 0zm6.5 9.5a2.5 2.5 0 00-5 0V19h5v-2.5zM13 19v-2.5a4.5 4.5 0 119 0V21h-9v-2z" />
    </Svg>
  );
}

export default SvgGroup3Line;
