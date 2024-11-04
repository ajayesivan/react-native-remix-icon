import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSortNumberAsc(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 3v8H7V5.41l-2 .538V3.62L7.313 3h1.688zm10 0v13h3l-4 5-4-5h3V3h2zm-8 12.5c0 .564-.156 1.093-.427 1.544L8.289 21h-2.31l1.473-2.55A3.001 3.001 0 1111 15.5zm-3 1a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgSortNumberAsc;
