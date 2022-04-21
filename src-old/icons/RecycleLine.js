import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRecycleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19.562 12.097l1.531 2.653a3.5 3.5 0 01-3.03 5.25H16v2.5L11 19l5-3.5V18h2.062a1.5 1.5 0 001.3-2.25l-1.532-2.653 1.732-1zM7.304 9.134l.53 6.08-2.164-1.25-1.031 1.786A1.5 1.5 0 005.938 18H9v2H5.938a3.5 3.5 0 01-3.031-5.25l1.03-1.787-2.164-1.249 5.53-2.58zm6.446-6.165c.532.307.974.749 1.281 1.281l1.03 1.785 2.166-1.25-.53 6.081-5.532-2.58 2.165-1.25-1.031-1.786a1.5 1.5 0 00-2.598 0L9.169 7.903l-1.732-1L8.97 4.25a3.5 3.5 0 014.781-1.281z" />
    </Svg>
  );
}

export default SvgRecycleLine;
