import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileExcel2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.859 2.877l12.57-1.795a.5.5 0 01.571.494v20.848a.5.5 0 01-.57.494L2.858 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z" />
    </Svg>
  );
}

export default SvgFileExcel2Line;
