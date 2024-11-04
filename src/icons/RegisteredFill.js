import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRegisteredFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.5 5H8v10h2v-3h2.217l2.18 3h2.472l-2.55-3.51a3.5 3.5 0 00-1.627-6.486l-.192-.004zm0 2a1.5 1.5 0 011.493 1.355L14 10.5l-.007.145a1.5 1.5 0 01-1.348 1.348L12.5 12H10V9h2.5z" />
    </Svg>
  );
}

export default SvgRegisteredFill;
