import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPerplexityLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M7.173 3.26 5.5 1.74V7.5H3V17h2.5v5.26l1.673-1.52L11 17.26V22h2v-4.74l3.827 3.48 1.673 1.52V17H21V7.5h-2.5V1.74l-1.673 1.52L13 6.74V2h-2v4.74zM16.5 7.5h-1.363L16.5 6.26zm-7.637 0H7.5V6.26zm1.1 2-4.136 3.76-.327.298V15H5V9.5zm4.074 0H19V15h-.5v-1.442l-.327-.298zM7.5 14.442l3.5-3.181v3.297L7.5 17.74zm5.5-3.181 3.5 3.181v3.297L13 14.558z" />
  </Svg>
);
export default SvgPerplexityLine;
