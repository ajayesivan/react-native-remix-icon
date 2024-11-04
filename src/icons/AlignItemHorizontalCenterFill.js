import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemHorizontalCenterFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 4V2h2v2h6a1 1 0 011 1v5a1 1 0 01-1 1h-6v2h4a1 1 0 011 1v5a1 1 0 01-1 1h-4v2h-2v-2H7a1 1 0 01-1-1v-5a1 1 0 011-1h4v-2H5a1 1 0 01-1-1V5a1 1 0 011-1h6z" />
    </Svg>
  );
}

export default SvgAlignItemHorizontalCenterFill;
