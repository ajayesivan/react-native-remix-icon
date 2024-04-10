import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFontSize(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 110-6.93zM19 18a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgFontSize;
