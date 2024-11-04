import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderVideoFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 5h-8.586l-2-2H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zm-6 7.667a.4.4 0 010 .666l-4.878 3.252a.4.4 0 01-.622-.333V9.747a.4.4 0 01.622-.333L15 12.667z" />
    </Svg>
  );
}

export default SvgFolderVideoFill;
