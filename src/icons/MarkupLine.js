import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMarkupLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 10.497l1.039-3.635a1 1 0 011.922 0L14 10.497v1.5h.72a1 1 0 01.97.757l1.361 5.447a8 8 0 10-10.102 0l1.362-5.447a1 1 0 01.97-.757H10v-1.5zm2 9.5a7.951 7.951 0 003.265-.694l-1.327-5.306h-3.876l-1.327 5.305a7.948 7.948 0 003.265.695zm0 2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgMarkupLine;
