import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEBikeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.5 6.937A6.997 6.997 0 0119 13v8h-4.17a3.001 3.001 0 01-5.66 0H5v-8a6.997 6.997 0 013.5-6.063A3.974 3.974 0 018.125 6H5V4h3.126a4.002 4.002 0 017.748 0H19v2h-3.126c-.085.33-.212.645-.373.937zM12 14a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm0-7a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgEBikeFill;
