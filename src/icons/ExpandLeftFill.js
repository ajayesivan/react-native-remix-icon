import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandLeftFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 5v6h6v2h-6v6l-7-7 7-7zm8 14V5h2v14h-2z" />
    </Svg>
  );
}

export default SvgExpandLeftFill;
