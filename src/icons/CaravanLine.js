import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaravanLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.172 3a2 2 0 011.414.586l4.828 4.828A2 2 0 0121 9.828V17h2v2h-8.126a4.002 4.002 0 01-7.748 0H3a1 1 0 01-1-1V5a2 2 0 012-2h10.172zM11 16a2 2 0 100 4 2 2 0 000-4zm3.172-11H4v12h3.126a4.002 4.002 0 017.748 0H19V9.828L14.172 5zM14 7v6H6V7h8zm-2 2H8v2h4V9z" />
    </Svg>
  );
}

export default SvgCaravanLine;
