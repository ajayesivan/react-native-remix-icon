import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyDollarBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm1 2v14h16v-14h-16zm4.5 9h5.5a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v2h-2v-2h-2.5v-2z" />
    </Svg>
  );
}

export default SvgMoneyDollarBoxLine;
