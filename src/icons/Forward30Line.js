import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgForward30Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 12C2 6.477 6.477 2 12 2a9.985 9.985 0 018 4V3.5h2v6h-4.834c.212.368.334.795.334 1.25v2.5a2.5 2.5 0 01-5 0v-2.5A2.5 2.5 0 0116 8.458V7.5h2.616A8 8 0 1020 12h2c0 5.523-4.477 10-10 10S2 17.523 2 12zm13-2.25a1 1 0 00-1 1v2.5a1 1 0 102 0v-2.5a1 1 0 00-1-1zm-5.625 3a.625.625 0 110 1.25H6.75v1.5h2.625a2.125 2.125 0 001.62-3.5 2.125 2.125 0 00-1.62-3.5H6.75V10h2.625a.625.625 0 110 1.25H7.5v1.5h1.875z" />
    </Svg>
  );
}

export default SvgForward30Line;
