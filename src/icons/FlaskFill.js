import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlaskFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2v2h-1v3.243a8 8 0 00.736 3.352l4.281 9.276A1.5 1.5 0 0118.655 22H5.344a1.5 1.5 0 01-1.362-2.129l4.281-9.276A8 8 0 009 7.243V4H8V2h8zm-3 2h-2v4h2V4z" />
    </Svg>
  );
}

export default SvgFlaskFill;
