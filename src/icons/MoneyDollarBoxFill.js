import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyDollarBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm5.5 11v2h2.5v2h2v-2h1a2.5 2.5 0 100-5h-4a.5.5 0 110-1h5.5v-2h-2.5v-2h-2v2h-1a2.5 2.5 0 100 5h4a.5.5 0 010 1h-5.5z" />
    </Svg>
  );
}

export default SvgMoneyDollarBoxFill;
