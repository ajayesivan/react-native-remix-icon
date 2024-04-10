import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTreeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 7c0 .262-.017.52-.05.774A6 6 0 0113 18.658V22h-2v-3.6a5.5 5.5 0 01-6.517-8.657A8.006 8.006 0 006.286 12.6l1.428-1.4A5.989 5.989 0 016 7a6 6 0 1112 0z" />
    </Svg>
  );
}

export default SvgTreeFill;
