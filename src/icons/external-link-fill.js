import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExternalLinkFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3z" />
  </Svg>
);
export default SvgExternalLinkFill;
