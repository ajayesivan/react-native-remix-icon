import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCurrencyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.005 16.003h2v-12h-10v2h8v10zm0 2v2.999c0 .553-.45 1-1.007 1H4.012a1.001 1.001 0 01-1.007-1l.002-13.998c0-.553.45-1.001 1.007-1.001h2.99v-3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3zm-10-2v2h2v1h2v-1h.5a2.5 2.5 0 100-5h-3a.5.5 0 110-1h4.5v-2h-2v-1h-2v1h-.5a2.5 2.5 0 000 5h3a.5.5 0 010 1h-4.5z" />
    </Svg>
  );
}

export default SvgCurrencyFill;
