import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileLockFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-1 9v-1a3 3 0 10-6 0v1H8v5h8v-5h-1zm-2 0h-2v-1a1 1 0 112 0v1z" />
    </Svg>
  );
}

export default SvgFileLockFill;
