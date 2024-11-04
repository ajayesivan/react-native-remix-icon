import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNewsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3zm3 4h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm-4 4v-2h4v2h-4zm-8 4v-2h12v2H6z" />
    </Svg>
  );
}

export default SvgNewsFill;
