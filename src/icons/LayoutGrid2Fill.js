import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutGrid2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v4h5.5V3H3zm6.5 0v5h5V3h-5zm7 0v5H22V4a1 1 0 00-1-1h-4.5zm5.5 7h-5.5v4H22v-4zm0 6h-5.5v5H21a1 1 0 001-1v-4zm-7.5 5v-5h-5v5h5zm-7 0v-5H2v4a1 1 0 001 1h4.5zM2 14h5.5v-4H2v4zm7.5-4h5v4h-5v-4z" />
    </Svg>
  );
}

export default SvgLayoutGrid2Fill;
