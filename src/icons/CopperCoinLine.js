import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopperCoinLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-12.95l4.95 4.95-4.95 4.95-4.95-4.95 4.95-4.95zm0 2.828l-2.121 2.122 2.12 2.121 2.122-2.121-2.121-2.122z" />
    </Svg>
  );
}

export default SvgCopperCoinLine;
