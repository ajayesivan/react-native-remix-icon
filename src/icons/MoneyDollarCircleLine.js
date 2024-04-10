import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoneyDollarCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6h5.5a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v2h-2v-2h-2.5v-2z" />
    </Svg>
  );
}

export default SvgMoneyDollarCircleLine;
