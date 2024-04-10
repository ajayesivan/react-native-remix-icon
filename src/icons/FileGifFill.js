import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileGifFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992C3 2.444 3.447 2 3.998 2H16zm-3 8h-1v5h1v-5zm-2 0H9a2 2 0 00-2 2v1a2 2 0 002 2h1a1 1 0 001-1v-2H9v1h1v1H9a1 1 0 01-1-1v-1a1 1 0 011-1h2v-1zm6 0h-3v5h1v-2h2v-1h-2v-1h2v-1z" />
    </Svg>
  );
}

export default SvgFileGifFill;
