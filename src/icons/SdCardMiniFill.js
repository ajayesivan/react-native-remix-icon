import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSdCardMiniFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 2h12a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-8.58a1 1 0 01.292-.707l1.562-1.567A.5.5 0 006 9.793V3a1 1 0 011-1zm8 2v4h2V4h-2zm-3 0v4h2V4h-2zM9 4v4h2V4H9z" />
    </Svg>
  );
}

export default SvgSdCardMiniFill;
