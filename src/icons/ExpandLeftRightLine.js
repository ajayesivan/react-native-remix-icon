import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandLeftRightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.043 5.793L2.836 12l6.207 6.207 1.414-1.414L5.664 12l4.793-4.793-1.414-1.414zm5.914 12.414L21.164 12l-6.207-6.207-1.414 1.414L18.336 12l-4.793 4.793 1.414 1.414z" />
    </Svg>
  );
}

export default SvgExpandLeftRightLine;
