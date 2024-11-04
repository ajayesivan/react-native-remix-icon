import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileGifLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 5v13.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992C3 2.444 3.447 2 3.998 2H16zm-1 2H5v16h14V8h-4V4zm-2 6v5h-1v-5h1zm-2 0v1H9a1 1 0 00-1 1v1a1 1 0 001 1h1v-1H9v-1h2v2a1 1 0 01-1 1H9a2 2 0 01-2-2v-1a2 2 0 012-2h2zm6 0v1h-2v1h2v1h-2v2h-1v-5h3z" />
    </Svg>
  );
}

export default SvgFileGifLine;
