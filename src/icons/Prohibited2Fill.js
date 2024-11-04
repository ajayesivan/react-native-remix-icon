import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProhibited2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.257 18.329A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2c2.401 0 4.605.846 6.329 2.257L4.257 18.33zM19.743 5.67A9.959 9.959 0 0122 12c0 5.523-4.477 10-10 10a9.959 9.959 0 01-6.329-2.257L19.743 5.67z" />
    </Svg>
  );
}

export default SvgProhibited2Fill;
