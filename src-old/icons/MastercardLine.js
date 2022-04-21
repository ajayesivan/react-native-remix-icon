import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMastercardLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 18.294a7.3 7.3 0 110-12.588 7.3 7.3 0 110 12.588zm1.702-1.384a5.3 5.3 0 100-9.82A7.273 7.273 0 0115.6 12c0 1.89-.719 3.614-1.898 4.91zm-3.404-9.82a5.3 5.3 0 100 9.82A7.273 7.273 0 018.4 12c0-1.89.719-3.614 1.898-4.91zM12 8.205A5.284 5.284 0 0010.4 12c0 1.488.613 2.832 1.6 3.795A5.284 5.284 0 0013.6 12 5.284 5.284 0 0012 8.205z" />
    </Svg>
  );
}

export default SvgMastercardLine;
