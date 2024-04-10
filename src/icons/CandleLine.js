import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCandleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.172 9.331a4 4 0 010-5.656L12 .846l2.828 2.829A4 4 0 0113 10.377V12h5a1 1 0 011 1v7h2v2H3v-2h2v-7a1 1 0 011-1h5v-1.623A3.982 3.982 0 019.172 9.33zm1.414-4.242a2 2 0 102.828 0L12 3.675l-1.414 1.414zM7 14v6h10v-6H7z" />
    </Svg>
  );
}

export default SvgCandleLine;
