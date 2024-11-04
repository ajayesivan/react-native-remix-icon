import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFriendicaFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 3v4.5H9v4h6v5H9V21h9a3 3 0 003-3V6a3 3 0 00-3-3h-3zM2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z" />
    </Svg>
  );
}

export default SvgFriendicaFill;
