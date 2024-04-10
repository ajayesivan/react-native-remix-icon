import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFundsBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.005 5.003v14h16v-14h-16zm-1-2h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm11.793 6.793l-1.793-1.793h5v5l-1.793-1.793-3.864 3.864-2.121-2.121-2.829 2.828-1.414-1.414 4.243-4.243 2.121 2.121 2.45-2.45z" />
    </Svg>
  );
}

export default SvgFundsBoxLine;
