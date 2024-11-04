import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 10.997v-3h-6v-4h-4v4H4v3h16zm1 2v8a1 1 0 01-1 1H10v-6H8v6H4a1 1 0 01-1-1v-8H2v-6a1 1 0 011-1h5v-3a1 1 0 011-1h6a1 1 0 011 1v3h5a1 1 0 011 1v6h-1z" />
    </Svg>
  );
}

export default SvgBrush3Fill;
