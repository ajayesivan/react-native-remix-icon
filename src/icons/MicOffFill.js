import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.425 17.839A8.941 8.941 0 0113 18.945V23h-2v-4.055A9.004 9.004 0 013.055 11h2.016a7.002 7.002 0 009.87 5.354l-1.55-1.55A5 5 0 017 10V8.414L1.393 2.808l1.414-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm2.95-2.679l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.949 8.949 0 01-1.57 4.16zm-2.91-2.909l-8.78-8.78A5 5 0 0117 6v4c.001.81-.191 1.575-.533 2.251z" />
    </Svg>
  );
}

export default SvgMicOffFill;
