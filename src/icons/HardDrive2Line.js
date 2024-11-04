import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHardDrive2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 14h14V4H5v10zm0 2v4h14v-4H5zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm11 15h2v2h-2v-2z" />
    </Svg>
  );
}

export default SvgHardDrive2Line;
