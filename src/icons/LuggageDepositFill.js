import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLuggageDepositFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 3a1 1 0 011 1v2h4a1 1 0 011 1v12h2v2H1v-2h2V7a1 1 0 011-1h4V4a1 1 0 011-1h6zm-5 5H8v11h2V8zm6 0h-2v11h2V8zm-2-3h-4v1h4V5z" />
    </Svg>
  );
}

export default SvgLuggageDepositFill;
