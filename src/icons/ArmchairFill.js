import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArmchairFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 3H8a4 4 0 00-4 4v1a5 5 0 015 5h6a5 5 0 015-5V7a4 4 0 00-4-4zm4 7a3 3 0 00-3 3v3h-2v-1H9v1H7v-3a3 3 0 10-4 2.83V21h2v-1h14v1h2v-5.17A3.001 3.001 0 0020 10z" />
    </Svg>
  );
}

export default SvgArmchairFill;
