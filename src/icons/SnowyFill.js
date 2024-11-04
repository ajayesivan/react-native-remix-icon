import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSnowyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.027 17.43A8.003 8.003 0 019 2a8.003 8.003 0 017.458 5.099A5.5 5.5 0 1118 17.978a6 6 0 00-11.973-.549zM13 16.267l1.964-1.134 1 1.732L14 18l1.964 1.134-1 1.732L13 19.732V22h-2v-2.268l-1.964 1.134-1-1.732L10 18l-1.964-1.134 1-1.732L11 16.268V14h2v2.268z" />
    </Svg>
  );
}

export default SvgSnowyFill;
