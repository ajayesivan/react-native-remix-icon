import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignpostFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 5V2h-2v3H4a1 1 0 00-1 1v8a1 1 0 001 1h13.414l4.293-4.293a1 1 0 000-1.414L17.414 5H12zm0 12h-2v5h2v-5z" />
    </Svg>
  );
}

export default SvgSignpostFill;
