import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClipboardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 01-.993.993H3.993A.993.993 0 013 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm2-2h8v4H8V2z" />
    </Svg>
  );
}

export default SvgClipboardFill;
