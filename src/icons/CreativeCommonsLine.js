import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 8c1.104 0 2.105.448 2.829 1.173l-1.414 1.413a2 2 0 100 2.828l1.413 1.414A4.001 4.001 0 015 12c0-2.208 1.792-4 4-4zm9.829 1.173A4.001 4.001 0 0012 12a4.001 4.001 0 006.828 2.828l-1.414-1.414a2 2 0 110-2.828l1.415-1.413zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 100 16 8 8 0 000-16z" />
    </Svg>
  );
}

export default SvgCreativeCommonsLine;
