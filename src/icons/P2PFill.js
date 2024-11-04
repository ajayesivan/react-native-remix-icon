import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgP2PFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 5a3 3 0 11-6 0 3 3 0 016 0zM7 3a4 4 0 00-4 4v2h2V7a2 2 0 012-2h3V3H7zm10 18a4 4 0 004-4v-2h-2v2a2 2 0 01-2 2h-3v2h3zM7 16a3 3 0 100-6 3 3 0 000 6zm10-7a4 4 0 00-4 4h8a4 4 0 00-4-4zM3 21a4 4 0 018 0H3z" />
    </Svg>
  );
}

export default SvgP2PFill;
