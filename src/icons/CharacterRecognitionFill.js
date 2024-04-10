import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCharacterRecognitionFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.998 3v18h-18V3h18zm-8.001 3h-2L6.598 17h2.154l1.199-3h4.09l1.201 3h2.155l-4.4-11zm-1 2.885L13.242 12H10.75l1.247-3.115z" />
    </Svg>
  );
}

export default SvgCharacterRecognitionFill;
