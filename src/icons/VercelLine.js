import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVercelLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M23 21.648L12 2.352 1 21.648h22zm-3.442-2H4.442L12 6.39l7.558 13.258z" />
    </Svg>
  );
}

export default SvgVercelLine;
