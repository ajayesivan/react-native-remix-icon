import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLineHeight2(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 3v2h2v14H2v2h6v-2H6V5h2V3H2zm8.2 15h2.154l1.2-3h4.892l1.2 3H21.8L17 6h-2l-4.8 12zM16 8.885L17.646 13h-3.292L16 8.885z" />
    </Svg>
  );
}

export default SvgLineHeight2;
