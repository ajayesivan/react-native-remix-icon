import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFontFamily(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.554 22H3.4L11 3h2l7.6 19h-2.154l-2.4-6H7.954l-2.4 6zm3.2-8h6.492L12 5.885 8.754 14z" />
    </Svg>
  );
}

export default SvgFontFamily;
