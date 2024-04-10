import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailUnreadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.803 8.493A5.022 5.022 0 0022 8.9V20a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h13.1c-.066.323-.1.658-.1 1a4.98 4.98 0 001.193 3.241l-5.132 4.442-6.414-5.445-1.294 1.524 7.72 6.555 6.73-5.824zM21 7a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgMailUnreadFill;
