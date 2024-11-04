import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRemixiconLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.365 6l8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896A6.502 6.502 0 0112.078 6H6.364zM14 5a4.5 4.5 0 006.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.365-4.4 6.377L20 21h-17V4h11.111a4.512 4.512 0 00-.111 1zm4.5 2.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-13.5-.03V19h10.48L5.001 7.47z" />
    </Svg>
  );
}

export default SvgRemixiconLine;
