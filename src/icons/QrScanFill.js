import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQrScanFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 15v5.007a.994.994 0 01-.993.993H3.993A.993.993 0 013 20.007V15h18zM2 11h20v2H2v-2zm19-2H3V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993V9z" />
    </Svg>
  );
}

export default SvgQrScanFill;
