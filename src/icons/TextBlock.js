import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTextBlock(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 2v3h2V4h2v5H3.5v2h5V9H7V4h2v1h2V2H1zm20 1h-7v2h6v14H4v-5H2v6a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgTextBlock;
