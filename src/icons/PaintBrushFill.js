import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPaintBrushFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 2.997h16a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1zm2 9h6a1 1 0 011 1v3h1v6h-4v-6h1v-2H5a1 1 0 01-1-1v-2h2v1zm11.732 1.732L19.5 11.96l1.768 1.768a2.5 2.5 0 11-3.536 0z" />
    </Svg>
  );
}

export default SvgPaintBrushFill;
