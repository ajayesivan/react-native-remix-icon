import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlowerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2.076l.455.233a12.05 12.05 0 014.402 3.846 11.92 11.92 0 012.962-.957L21 4.98V13a9 9 0 01-18 0V4.98l1.18.218c1.041.19 2.035.516 2.963.957a12.05 12.05 0 014.402-3.846L12 2.076zm-3.122 5.09A12.06 12.06 0 0112 10.363a12.066 12.066 0 013.122-3.199A10.055 10.055 0 0012 4.337a10.056 10.056 0 00-3.122 2.828zm2.021 5.268a10.05 10.05 0 00-3.908-4.102A9.939 9.939 0 005 7.457V13c0 3.29 2.27 6.05 5.329 6.8A12.032 12.032 0 0110 17c0-1.617.32-3.159.9-4.566zm1.554 7.552A7 7 0 0019 13V7.457A9.996 9.996 0 0012 17c0 1.042.159 2.045.453 2.987z" />
    </Svg>
  );
}

export default SvgFlowerLine;
