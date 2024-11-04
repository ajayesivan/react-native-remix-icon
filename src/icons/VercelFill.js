import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVercelFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M23 21.648H1L12 2.352l11 19.296z" />
    </Svg>
  );
}

export default SvgVercelFill;
