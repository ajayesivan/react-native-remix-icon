import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGalleryView(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm2 1v14h16V5H4zm2 2h5v4H6V7zm5 6H6v4h5v-4zm2-6h5v4h-5V7zm5 6h-5v4h5v-4z" />
    </Svg>
  );
}

export default SvgGalleryView;
