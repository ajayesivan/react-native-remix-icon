import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

function SvgPixFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#pix-fill_svg__clip0_1315_1152)">
        <Path d="M5.385 18.113l4.14 4.14a3.5 3.5 0 004.95 0l4.14-4.14a3.99 3.99 0 01-3.08-1.163l-3.005-3.005a.75.75 0 00-1.06 0L8.463 16.95a3.99 3.99 0 01-3.079 1.163zm15.1-1.87l1.768-1.768a3.5 3.5 0 000-4.95l-1.768-1.768a3 3 0 00-4.242 0l-3.006 3.005a1.75 1.75 0 01-2.475 0L7.757 7.757a3 3 0 00-4.242 0L1.747 9.525a3.5 3.5 0 000 4.95l1.768 1.768a3 3 0 004.242 0l3.005-3.006a1.75 1.75 0 012.475 0l3.005 3.006a3 3 0 004.243 0zM5.385 5.886a3.99 3.99 0 013.08 1.164l3.005 3.005a.75.75 0 001.06 0l3.005-3.005a3.99 3.99 0 013.08-1.164l-4.14-4.14a3.5 3.5 0 00-4.95 0l-4.14 4.14z" />
      </G>
      <Defs>
        <ClipPath id="pix-fill_svg__clip0_1315_1152">
          <Rect fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgPixFill;
