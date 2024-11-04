import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPerplexityLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.173 3.26L5.5 1.74V7.5H3V17h2.5v5.26l1.673-1.52L11 17.26V22h2v-4.74l3.827 3.48 1.673 1.52V17H21V7.5h-2.5V1.74l-1.673 1.52L13 6.74V2h-2v4.74L7.173 3.26zM16.5 7.5h-1.363L16.5 6.26V7.5zm-7.637 0H7.5V6.26L8.863 7.5zm1.1 2l-4.136 3.76-.327.298V15H5V9.5h4.963zm4.074 0H19V15h-.5v-1.442l-.327-.298-4.136-3.76zM7.5 14.442l3.5-3.181v3.297l-3.5 3.181v-3.297zm5.5-3.181l3.5 3.181v3.297L13 14.558V11.26z" />
    </Svg>
  );
}

export default SvgPerplexityLine;
