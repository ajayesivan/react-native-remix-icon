import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCharacterRecognitionLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.998 15v4h4v2h-6v-6h2zm16 0v6h-6v-2h4v-4h2zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.598l4.399-11h2zm-1 2.885L10.75 12h2.492l-1.245-3.115zM8.998 3v2h-4v4h-2V3h6zm12 0v6h-2V5h-4V3h6z" />
    </Svg>
  );
}

export default SvgCharacterRecognitionLine;
