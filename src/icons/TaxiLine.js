import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTaxiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 11v10a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1V11l2.447-4.894A2 2 0 016.237 5H9V3h6v2h2.764a2 2 0 011.789 1.106L22 11zm-2 2H4v5h16v-5zM4.236 11h15.528l-2-4H6.236l-2 4zM6.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgTaxiLine;