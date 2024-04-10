import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHonourFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4v14.721a.5.5 0 01-.298.458L12 23.03 3.298 19.18A.5.5 0 013 18.722V4H1V2h22v2h-2zM8 12v2h8v-2H8zm0-4v2h8V8H8z" />
    </Svg>
  );
}

export default SvgHonourFill;
