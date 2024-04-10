import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemVerticalCenterFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 19a1 1 0 001 1h5a1 1 0 001-1v-6h2v4a1 1 0 001 1h5a1 1 0 001-1v-4h2v-2h-2V7a1 1 0 00-1-1h-5a1 1 0 00-1 1v4h-2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v6H2v2h2v6z" />
    </Svg>
  );
}

export default SvgAlignItemVerticalCenterFill;
