import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicOffLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16.425 17.839A8.941 8.941 0 0113 18.945V23h-2v-4.055A9.004 9.004 0 013.055 11H5.07a7.002 7.002 0 009.87 5.354l-1.551-1.55A5 5 0 017 10V8.414L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm-7.392-7.392l2.52 2.52a3.002 3.002 0 01-2.52-2.52zm10.342 4.713l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 01-1.57 4.16zm-2.91-2.909l-1.548-1.548c.054-.226.083-.46.083-.703V6a3 3 0 00-5.818-1.032L7.686 3.471A5 5 0 0117 6v4a4.98 4.98 0 01-.534 2.251z" />
    </Svg>
  );
}

export default SvgMicOffLine;
