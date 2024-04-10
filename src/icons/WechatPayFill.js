import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWechatPayFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.271 14.669a.661.661 0 01-.88-.269l-.043-.095-1.818-3.998a.473.473 0 010-.146.327.327 0 01.335-.327.305.305 0 01.196.066l2.18 1.527a.988.988 0 00.546.167.894.894 0 00.342-.066l10.047-4.5a10.73 10.73 0 00-8.171-3.526C6.479 3.502 2 7.232 2 11.87a7.83 7.83 0 003.46 6.296.662.662 0 01.24.727l-.45 1.701a.945.945 0 00-.051.24.327.327 0 00.334.334.416.416 0 00.19-.058l2.18-1.265c.16-.098.343-.151.53-.152.1 0 .198.014.292.043 1.062.3 2.16.452 3.264.45 5.525 0 10.011-3.729 10.011-8.33a7.228 7.228 0 00-1.098-3.883L9.351 14.625l-.08.044z" />
    </Svg>
  );
}

export default SvgWechatPayFill;