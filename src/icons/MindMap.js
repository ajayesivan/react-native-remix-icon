import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMindMap(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 3a3 3 0 110 6h-3a3.001 3.001 0 01-2.829-2H11c-1.1 0-2 .9-2 2v.171a3.001 3.001 0 010 5.658V15c0 1.1.9 2 2 2h1.17A3.001 3.001 0 0115 15h3a3 3 0 110 6h-3a3.001 3.001 0 01-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 110-6h2a4 4 0 014-4h1.17A3.001 3.001 0 0115 3h3zm0 14h-3a1 1 0 100 2h3a1 1 0 100-2zM8 11H5a1 1 0 100 2h3a1 1 0 100-2zm10-6h-3a1 1 0 100 2h3a1 1 0 100-2z" />
    </Svg>
  );
}

export default SvgMindMap;
