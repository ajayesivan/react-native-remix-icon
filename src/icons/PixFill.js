import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SvgPixFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <G clipPath="url(#pix-fill_svg__a)">
      <Path d="m5.385 18.114 4.14 4.139a3.5 3.5 0 0 0 4.95 0l4.14-4.14a4 4 0 0 1-3.08-1.163l-3.005-3.005a.75.75 0 0 0-1.06 0L8.464 16.95a4 4 0 0 1-3.079 1.163m15.1-1.871 1.768-1.768a3.5 3.5 0 0 0 0-4.95l-1.768-1.768a3 3 0 0 0-4.242 0l-3.006 3.005a1.75 1.75 0 0 1-2.475 0L7.757 7.757a3 3 0 0 0-4.242 0L1.747 9.525a3.5 3.5 0 0 0 0 4.95l1.768 1.768a3 3 0 0 0 4.242 0l3.005-3.006a1.75 1.75 0 0 1 2.475 0l3.005 3.006a3 3 0 0 0 4.243 0M5.385 5.886a4 4 0 0 1 3.08 1.164l3.005 3.005a.75.75 0 0 0 1.06 0l3.005-3.005a4 4 0 0 1 3.08-1.164l-4.14-4.14a3.5 3.5 0 0 0-4.95 0z" />
    </G>
    <Defs>
      <ClipPath id="pix-fill_svg__a">
        <Rect fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgPixFill;
