import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWeightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 6a2 2 0 11-4 0 2 2 0 014 0zm1.465 2a4 4 0 10-6.93 0H5.066a1 1 0 00-.986.832l-1.88 11A1 1 0 003.186 21h17.629a1 1 0 00.986-1.169l-1.88-11A1 1 0 0018.934 8h-3.47zM12 10h6.091l1.538 9H4.372l1.539-9H12z" />
    </Svg>
  );
}

export default SvgWeightLine;
