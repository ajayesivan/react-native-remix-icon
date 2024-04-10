import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGalleryView2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v6a1 1 0 001 1h7a1 1 0 001-1V4a1 1 0 00-1-1H3zm1 6V5h5v4H4zm-1 4a1 1 0 00-1 1v6a1 1 0 001 1h7a1 1 0 001-1v-6a1 1 0 00-1-1H3zm1 6v-4h5v4H4zm9-15a1 1 0 011-1h7a1 1 0 011 1v6a1 1 0 01-1 1h-7a1 1 0 01-1-1V4zm2 1v4h5V5h-5zm-1 8a1 1 0 00-1 1v6a1 1 0 001 1h7a1 1 0 001-1v-6a1 1 0 00-1-1h-7zm1 6v-4h5v4h-5z" />
    </Svg>
  );
}

export default SvgGalleryView2;
