import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGovernmentFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 19V8H1V6h3V4a1 1 0 011-1h14a1 1 0 011 1v2h3v2h-1v11h1v2H1v-2h1zm11 0v-7h-2v7h2zm-5 0v-7H6v7h2zm10 0v-7h-2v7h2zM6 5v1h12V5H6z" />
    </Svg>
  );
}

export default SvgGovernmentFill;
