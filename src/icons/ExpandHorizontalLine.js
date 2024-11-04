import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandHorizontalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.5 12l4.95-4.95 1.414 1.415L4.328 11H10v2H4.328l2.533 2.533-1.414 1.414L.5 12zM14 13h5.67l-2.534 2.535 1.414 1.414L23.5 12l-4.95-4.95-1.414 1.415L19.672 11H14v2z" />
    </Svg>
  );
}

export default SvgExpandHorizontalLine;
