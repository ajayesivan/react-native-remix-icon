import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNewspaperLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 20V4H4v15a1 1 0 001 1h11zm3 2H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v7h4v9a3 3 0 01-3 3zm-1-10v7a1 1 0 102 0v-7h-2zM6 6h6v6H6V6zm2 2v2h2V8H8zm-2 5h8v2H6v-2zm0 3h8v2H6v-2z" />
    </Svg>
  );
}

export default SvgNewspaperLine;
