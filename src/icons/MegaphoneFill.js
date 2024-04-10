import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMegaphoneFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 10.063V4a1 1 0 00-1-1h-1c-1.979 1.979-5.697 3.087-8 3.613v10.774c2.303.526 6.021 1.634 8 3.613h1a1 1 0 001-1v-6.063a2 2 0 000-3.874zM5 7a2 2 0 00-2 2v6a2 2 0 002 2h1l1 5h2V7H5z" />
    </Svg>
  );
}

export default SvgMegaphoneFill;
