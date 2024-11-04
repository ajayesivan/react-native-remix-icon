import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMagicFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.224 15.508l-2.213 4.65a.6.6 0 01-.977.155l-3.542-3.739a.6.6 0 00-.358-.182l-5.106-.668a.6.6 0 01-.45-.881l2.462-4.524a.6.6 0 00.063-.396L4.16 4.86a.6.6 0 01.7-.7l5.062.943a.6.6 0 00.397-.063l4.523-2.46a.6.6 0 01.882.448l.668 5.107a.6.6 0 00.182.357l3.739 3.542a.6.6 0 01-.155.977l-4.65 2.213a.6.6 0 00-.284.284zm.797 1.927l1.414-1.414 4.242 4.242-1.414 1.415-4.242-4.243z" />
    </Svg>
  );
}

export default SvgMagicFill;
