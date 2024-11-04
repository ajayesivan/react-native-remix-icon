import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastDropLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3.097l-4.95 4.95a7 7 0 109.9 0L12 3.097zM12 .27l6.364 6.364a9 9 0 11-12.728 0L12 .269zm0 17.728v-10a5 5 0 110 10z" />
    </Svg>
  );
}

export default SvgContrastDropLine;
