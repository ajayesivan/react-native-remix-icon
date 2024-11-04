import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTumblrFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.27 7.63A5.76 5.76 0 0010.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667.474.307 1.484.458 3.03.455V22h-4.243a4.546 4.546 0 01-4.545-4.546v-6.666H6.27V7.63z" />
    </Svg>
  );
}

export default SvgTumblrFill;
