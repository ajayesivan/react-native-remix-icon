import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFocus3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 1l.001 3.062A8.004 8.004 0 0119.938 11H23v2l-3.062.001a8.004 8.004 0 01-6.937 6.937L13 23h-2v-3.062a8.004 8.004 0 01-6.938-6.937L1 13v-2h3.062A8.004 8.004 0 0111 4.062V1h2zm-1 9a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgFocus3Fill;
