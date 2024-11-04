import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipBackLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 4a1 1 0 011 1v6.333l10.223-6.815a.5.5 0 01.777.416v14.132a.5.5 0 01-.777.416L8 12.667V19a1 1 0 11-2 0V5a1 1 0 011-1zm10 3.737L10.606 12 17 16.263V7.737z" />
    </Svg>
  );
}

export default SvgSkipBackLine;
