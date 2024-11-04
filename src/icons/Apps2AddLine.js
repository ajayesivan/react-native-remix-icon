import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgApps2AddLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.5 7a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm0 10a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm10 0a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm-3-10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm0 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm10 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM16 11V8h-3V6h3V3h2v3h3v2h-3v3h-2z" />
    </Svg>
  );
}

export default SvgApps2AddLine;
