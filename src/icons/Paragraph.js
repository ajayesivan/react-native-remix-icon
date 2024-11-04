import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgParagraph(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 6v15h-2v-5a6 6 0 010-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 100 8V6z" />
    </Svg>
  );
}

export default SvgParagraph;
