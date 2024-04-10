import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 19.997v-5h2v5h9v-7H5v7h3zm-4-9h16v-3h-6v-4h-4v4H4v3zm-1 10v-8H2v-6a1 1 0 011-1h5v-3a1 1 0 011-1h6a1 1 0 011 1v3h5a1 1 0 011 1v6h-1v8a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
    </Svg>
  );
}

export default SvgBrush3Line;
