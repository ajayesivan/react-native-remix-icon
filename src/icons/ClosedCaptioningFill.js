import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClosedCaptioningFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM9 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.1 0 2.1-.45 2.828-1.172l-1.414-1.414a2 2 0 110-2.828l1.415-1.413A3.988 3.988 0 009 8zm7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.828 2.828l-1.414-1.414a2 2 0 110-2.828l1.415-1.413A3.988 3.988 0 0016 8z" />
    </Svg>
  );
}

export default SvgClosedCaptioningFill;
