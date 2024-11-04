import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoinsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.005 2.003a8 8 0 013.292 15.293A8 8 0 116.711 6.71a8.003 8.003 0 017.294-4.707zm-4 6a6 6 0 100 12 6 6 0 000-12zm1 1v1h2v2h-4a.5.5 0 00-.09.992l.09.008h2a2.5 2.5 0 010 5v1h-2v-1h-2v-2h4a.5.5 0 00.09-.992l-.09-.008h-2a2.5 2.5 0 010-5v-1h2zm3-5A5.985 5.985 0 009.52 6.016a8 8 0 018.47 8.471 6 6 0 00-3.986-10.484z" />
    </Svg>
  );
}

export default SvgCoinsLine;
