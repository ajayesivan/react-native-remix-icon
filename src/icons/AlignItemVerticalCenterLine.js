import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignItemVerticalCenterLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 18V6H6v12h3zm-4 2a1 1 0 01-1-1v-6H2v-2h2V5a1 1 0 011-1h5a1 1 0 011 1v6h2V7a1 1 0 011-1h5a1 1 0 011 1v4h2v2h-2v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4h-2v6a1 1 0 01-1 1H5zm10-4h3V8h-3v8z" />
    </Svg>
  );
}

export default SvgAlignItemVerticalCenterLine;
