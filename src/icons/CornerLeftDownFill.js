import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerLeftDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 5h9v2h-7v7.586h5.414L11 21l-6.414-6.414H10V5z" />
    </Svg>
  );
}

export default SvgCornerLeftDownFill;
