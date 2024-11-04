import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMastercardLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 18.294a7.3 7.3 0 110-12.588 7.3 7.3 0 110 12.588zm1.702-1.384a5.3 5.3 0 100-9.82A7.273 7.273 0 0115.6 12c0 1.89-.719 3.614-1.898 4.91zm-3.404-9.82a5.3 5.3 0 100 9.82A7.273 7.273 0 018.401 12c0-1.89.719-3.614 1.898-4.91zm1.702 1.115a5.284 5.284 0 00-1.6 3.795c0 1.488.613 2.832 1.6 3.795a5.284 5.284 0 001.6-3.795 5.284 5.284 0 00-1.6-3.795z" />
    </Svg>
  );
}

export default SvgMastercardLine;
