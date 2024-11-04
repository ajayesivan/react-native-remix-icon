import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHonourLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4v14.721a.5.5 0 01-.298.458L12 23.03 3.298 19.18A.5.5 0 013 18.722V4H1V2h22v2h-2zM5 4v13.745l7 3.1 7-3.1V4H5zm3 4h8v2H8V8zm0 4h8v2H8v-2z" />
    </Svg>
  );
}

export default SvgHonourLine;
