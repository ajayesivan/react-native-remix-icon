import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopyrightFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5a5 5 0 004.288-2.428l-1.715-1.028A3 3 0 1112 9c1.093 0 2.05.584 2.573 1.457l1.715-1.03A5 5 0 0012 7z" />
    </Svg>
  );
}

export default SvgCopyrightFill;
