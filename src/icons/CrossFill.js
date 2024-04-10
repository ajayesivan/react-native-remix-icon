import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrossFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6V2z" />
    </Svg>
  );
}

export default SvgCrossFill;
