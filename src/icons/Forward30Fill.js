import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForward30Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.477 2 12 2a9.977 9.977 0 017.553 3.446L22 3v6h-5.215c.442.45.715 1.069.715 1.75v2.5a2.5 2.5 0 01-5 0v-2.5a2.5 2.5 0 013.853-2.103l1.782-1.782A8 8 0 1020 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12zm13-2.25a1 1 0 00-1 1v2.5a1 1 0 102 0v-2.5a1 1 0 00-1-1zm-5 3.625a.625.625 0 00-.625-.625H7.5v-1.5h1.875a.625.625 0 100-1.25H6.75V8.5h2.625a2.125 2.125 0 011.62 3.5 2.125 2.125 0 01-1.62 3.5H6.75V14h2.625c.345 0 .625-.28.625-.625z" />
    </Svg>
  );
}

export default SvgForward30Fill;
