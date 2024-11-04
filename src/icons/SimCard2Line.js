import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSimCard2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 4v16h12V7.828L14.172 4H6zM5 2h10l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zm8 8v8h-2v-6H8v-2h5zm-5 3h2v2H8v-2zm6 0h2v2h-2v-2zm0-3h2v2h-2v-2zm-6 6h2v2H8v-2zm6 0h2v2h-2v-2z" />
    </Svg>
  );
}

export default SvgSimCard2Line;
