import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLinkedinLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 9.55c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 015.5 5.5V21h-2v-7.5a3.5 3.5 0 10-7 0V21h-2V8.5h2v1.05zm-7-3.05a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2V21h-2V8.5z" />
    </Svg>
  );
}

export default SvgLinkedinLine;
