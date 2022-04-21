import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrainLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 01-2-2V7a4 4 0 014-4h10a4 4 0 014 4v11a2 2 0 01-2 2h-1.8zM7 5a2 2 0 00-2 2v11h14V7a2 2 0 00-2-2H7zm5 12a2 2 0 110-4 2 2 0 010 4zM6 7h12v4H6V7z" />
    </Svg>
  );
}

export default SvgTrainLine;
