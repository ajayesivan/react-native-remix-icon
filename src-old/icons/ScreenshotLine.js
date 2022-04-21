import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScreenshotLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.993 14.407l-1.552 1.552a4 4 0 11-1.418-1.41l1.555-1.556-4.185-4.185 1.415-1.415 4.185 4.185 4.189-4.189 1.414 1.414-4.19 4.19 1.562 1.56a4 4 0 11-1.414 1.414l-1.561-1.56zM7 20a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zm2-7V5H5v8H3V4a1 1 0 011-1h16a1 1 0 011 1v9h-2z" />
    </Svg>
  );
}

export default SvgScreenshotLine;
