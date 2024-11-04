import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProhibitedFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.743 18.329A9.958 9.958 0 0022 12c0-5.523-4.477-10-10-10a9.959 9.959 0 00-6.329 2.257L19.743 18.33zM4.257 5.67A9.959 9.959 0 002 12c0 5.523 4.477 10 10 10a9.958 9.958 0 006.329-2.257L4.257 5.67z" />
    </Svg>
  );
}

export default SvgProhibitedFill;
