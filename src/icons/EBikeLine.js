import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEBikeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.5 6.937A6.997 6.997 0 0119 13v8h-4.17a3.001 3.001 0 01-5.66 0H5v-8a6.997 6.997 0 013.5-6.063A3.974 3.974 0 018.125 6H5V4h3.126a4.002 4.002 0 017.748 0H19v2h-3.126c-.085.33-.212.645-.373.937zm-1.453 1.5C13.448 8.795 12.748 9 12 9a3.982 3.982 0 01-2.047-.563A5.001 5.001 0 007 13v6h2v-4a3 3 0 116 0v4h2v-6a5.001 5.001 0 00-2.953-4.563zM12 14a1 1 0 00-1 1v5a1 1 0 102 0v-5a1 1 0 00-1-1zm0-7a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgEBikeLine;
