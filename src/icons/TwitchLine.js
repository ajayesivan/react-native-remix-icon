import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTwitchLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.301 3h16.7v11.7l-4.7 4.7h-3.9l-2.5 2.4h-2.9v-2.4h-4V6.2l1.3-3.2zm.7 14.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5h-14v12.4zm10-9.4h2v4.7h-2V8zm0 0h2v4.7h-2V8zm-5 0h2v4.7h-2V8z" />
    </Svg>
  );
}

export default SvgTwitchLine;
