import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignpostLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 5h5.414l4.293 4.293a1 1 0 010 1.414L17.414 15H12v7h-2v-7H4a1 1 0 01-1-1V6a1 1 0 011-1h6V2h2v3zm4.586 8l3-3-3-3H5v6h11.586z" />
    </Svg>
  );
}

export default SvgSignpostLine;
