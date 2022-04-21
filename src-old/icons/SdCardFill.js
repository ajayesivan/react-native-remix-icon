import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSdCardFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.293 6.707L9 2h10a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V7.414a1 1 0 01.293-.707zM15 5v4h2V5h-2zm-3 0v4h2V5h-2zM9 5v4h2V5H9z" />
    </Svg>
  );
}

export default SvgSdCardFill;
