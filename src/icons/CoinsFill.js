import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoinsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.005 2.003a8 8 0 013.292 15.293A8 8 0 116.711 6.71a8.003 8.003 0 017.294-4.707zm-3 7h-2v1a2.5 2.5 0 00-.164 4.995l.164.005h2l.09.008a.5.5 0 010 .984l-.09.008h-4v2h2v1h2v-1a2.5 2.5 0 00.164-4.995l-.164-.005h-2l-.09-.008a.5.5 0 010-.984l.09-.008h4v-2h-2v-1zm3-5A5.985 5.985 0 009.52 6.016a8 8 0 018.47 8.471 6 6 0 00-3.986-10.484z" />
    </Svg>
  );
}

export default SvgCoinsFill;
