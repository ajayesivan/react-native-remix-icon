import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchange2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 21.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10-10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM3 8a5 5 0 015-5h3v2H8a3 3 0 00-3 3v3H3V8zm16 5v3a3 3 0 01-3 3h-3v2h3a5 5 0 005-5v-3h-2z" />
    </Svg>
  );
}

export default SvgExchange2Fill;
