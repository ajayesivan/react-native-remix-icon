import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShadowFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v3h3a1 1 0 011 1v14a1 1 0 01-1 1H7a1 1 0 01-1-1v-3H3a1 1 0 01-1-1V3zm6 15v2h3.44l-2-2H8zm3.56 0l2 2h2.88l-2-2h-2.88zM20 20v-1.44l-2-2V17a1 1 0 01-1 1h-.44l2 2H20zm0-6.44l-2-2v2.88l2 2v-2.88zm0-2.12V8h-2v1.44l2 2z" />
    </Svg>
  );
}

export default SvgShadowFill;
