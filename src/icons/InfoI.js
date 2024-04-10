import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInfoI(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-3 4h2v8H9v2h6v-2h-2V8H9v2z" />
    </Svg>
  );
}

export default SvgInfoI;
