import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandLeftLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.071 4.929l1.414 1.414L6.828 11H16v2H6.828l4.657 4.657-1.414 1.414L3 12.001l7.071-7.072zM18.001 19V5h2v14h-2z" />
    </Svg>
  );
}

export default SvgExpandLeftLine;
