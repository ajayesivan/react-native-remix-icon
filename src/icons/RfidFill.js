import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRfidFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.364 18.364a9 9 0 000-12.728l1.414-1.414c4.296 4.296 4.296 11.26 0 15.556l-1.414-1.414zM5.636 5.636a9 9 0 000 12.728l-1.414 1.414c-4.296-4.295-4.296-11.26 0-15.556l1.414 1.414zm9.9 9.9a5 5 0 000-7.072L16.95 7.05a7 7 0 010 9.9l-1.414-1.414zM8.463 8.463a5 5 0 000 7.072L7.05 16.95a7 7 0 010-9.9l1.414 1.414zM12 14a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgRfidFill;
