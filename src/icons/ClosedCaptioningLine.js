import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClosedCaptioningLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2H4v14h16V5zM9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 100 2.828l1.413 1.413A4.001 4.001 0 015 12c0-2.208 1.792-4 4-4zm7 0c1.105 0 2.105.448 2.829 1.173l-1.414 1.414a2 2 0 100 2.828l1.413 1.413A4.001 4.001 0 0112 12c0-2.208 1.792-4 4-4z" />
    </Svg>
  );
}

export default SvgClosedCaptioningLine;
