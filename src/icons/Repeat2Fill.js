import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRepeat2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 20v1.933a.5.5 0 01-.82.384l-4.12-3.433A.5.5 0 013.382 18H18a2 2 0 002-2V8h2v8a4 4 0 01-4 4H8zm8-16V2.067a.5.5 0 01.82-.384l4.12 3.433a.5.5 0 01-.321.884H6a2 2 0 00-2 2v8H2V8a4 4 0 014-4h10z" />
    </Svg>
  );
}

export default SvgRepeat2Fill;
