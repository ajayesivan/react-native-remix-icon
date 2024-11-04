import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAddLargeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2v9z" />
    </Svg>
  );
}

export default SvgAddLargeLine;
