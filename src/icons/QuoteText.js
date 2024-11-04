import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuoteText(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 4H3v2h18V4zm0 7H8v2h13v-2zm0 7H8v2h13v-2zM5 11H3v9h2v-9z" />
    </Svg>
  );
}

export default SvgQuoteText;
