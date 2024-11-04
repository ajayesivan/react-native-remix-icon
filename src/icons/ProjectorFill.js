import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProjectorFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.111 12a4.502 4.502 0 008.777 0H22v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h9.111zM5 16h2v2H5v-2zm10.5-2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM11.111 10H2V4a1 1 0 011-1h18a1 1 0 011 1v6h-2.111a4.502 4.502 0 00-8.777 0z" />
    </Svg>
  );
}

export default SvgProjectorFill;
