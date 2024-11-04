import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInfoCardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 5a1 1 0 011-1h20a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5zm8 3H7v2h2V8zm-2 5v3h2v-5H6v2h1zm6-4v2h6V9h-6zm5 4h-5v2h5v-2z" />
    </Svg>
  );
}

export default SvgInfoCardFill;
