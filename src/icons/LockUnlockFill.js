import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLockUnlockFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 10h13a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 0113.262-3.131l-1.789.894A5 5 0 007 9v1zm3 5v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgLockUnlockFill;
