import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileHistoryFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 4.999v14.01a.993.993 0 01-.993.991H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-3 7h-2v6h5v-2h-3V9z" />
    </Svg>
  );
}

export default SvgFileHistoryFill;
