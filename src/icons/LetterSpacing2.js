import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLetterSpacing2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.2 14h2.154l1.2-3h4.892l1.2 3H17.8L13 2h-2L6.2 14zM12 4.885L13.646 9h-3.292L12 4.885zM3 16v6h2v-2h14v2h2v-6h-2v2H5v-2H3z" />
    </Svg>
  );
}

export default SvgLetterSpacing2;
