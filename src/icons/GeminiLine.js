import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGeminiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.124 1.09h1.751l.052.855a9.743 9.743 0 009.128 9.128l.854.052v1.75l-.854.052a9.743 9.743 0 00-9.128 9.128l-.052.855h-1.75l-.052-.855a9.743 9.743 0 00-9.128-9.128l-.854-.051v-1.751l.854-.052a9.743 9.743 0 009.128-9.128l.051-.854zM12 5.85A11.599 11.599 0 015.85 12 11.6 11.6 0 0112 18.15 11.599 11.599 0 0118.15 12 11.598 11.598 0 0112 5.85z" />
    </Svg>
  );
}

export default SvgGeminiLine;
