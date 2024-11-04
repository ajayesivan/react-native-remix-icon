import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSquareRoot(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.382 4H22v2h-5.382L9 21.236 5.382 14H2v-2h4.618L9 16.764 15.382 4z" />
    </Svg>
  );
}

export default SvgSquareRoot;
