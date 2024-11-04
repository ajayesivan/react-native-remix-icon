import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownloadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 19h18v2H3v-2zM13 9h7l-8 8-8-8h7V1h2v8z" />
    </Svg>
  );
}

export default SvgDownloadFill;
