import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M23.413 8.792l-5.392 4.986L9.71 5.467 12 .5l3.386 7.34 8.027.952zm-4.79 11.244l2.57 2.57 1.414-1.414L2.808 1.393 1.394 2.808l5.264 5.264-6.07.72 5.934 5.488-1.575 7.928 7.054-3.948 7.053 3.948-.432-2.172z" />
    </Svg>
  );
}

export default SvgStarOffFill;
