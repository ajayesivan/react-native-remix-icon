import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingCartLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.005 16V4h-2V2h3a1 1 0 011 1v12h12.438l2-8H8.005V5h13.72a1 1 0 01.97 1.243l-2.5 10a1 1 0 01-.97.757H5.004a1 1 0 01-1-1zm2 7a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgShoppingCartLine;
