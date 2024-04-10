import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckboxMultipleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 7V3a1 1 0 011-1h13a1 1 0 011 1v13a1 1 0 01-1 1h-4v3.992C17 21.55 16.551 22 15.992 22H3.008A1.006 1.006 0 012 20.992l.003-12.985C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zm6 2H4.003L4 20h11V9zm-6.498 9l-3.535-3.536L6.38 13.05l2.121 2.122 4.243-4.243 1.414 1.414L8.502 18z" />
    </Svg>
  );
}

export default SvgCheckboxMultipleLine;
