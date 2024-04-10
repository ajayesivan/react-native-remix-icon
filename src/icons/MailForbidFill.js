import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailForbidFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.266 11.554l4.388-3.798-1.308-1.512-6.285 5.439-6.414-5.445-1.294 1.524 7.702 6.54A6.967 6.967 0 0011 18c0 1.074.242 2.09.674 3H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v8.255A6.968 6.968 0 0018 11a6.98 6.98 0 00-2.734.554zm1.44 9.154a3 3 0 004.001-4.001l-4 4zm-1.414-1.415l4.001-4a3 3 0 00-4.001 4.001zM18 23a5 5 0 110-10 5 5 0 010 10z" />
    </Svg>
  );
}

export default SvgMailForbidFill;
