import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMobileDownloadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 6c0-1.537.578-2.938 1.528-4H6a1 1 0 00-1 1v18a1 1 0 001 1h12a1 1 0 001-1v-9.083A6 6 0 0112 6zm0 11a1 1 0 110 2 1 1 0 010-2zM22 6h-3V2h-2v4h-3l4 4 4-4z" />
    </Svg>
  );
}

export default SvgMobileDownloadFill;
