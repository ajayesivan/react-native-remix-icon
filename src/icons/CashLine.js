import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCashLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 16a4 4 0 100-8 4 4 0 000 8zm9.005-11.997h-18a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1v-14a1 1 0 00-1-1zm-17 11.643V8.354a3.508 3.508 0 002.35-2.351h11.291a3.508 3.508 0 002.359 2.353v7.288a3.508 3.508 0 00-2.36 2.359H6.355a3.508 3.508 0 00-2.351-2.357z" />
    </Svg>
  );
}

export default SvgCashLine;
