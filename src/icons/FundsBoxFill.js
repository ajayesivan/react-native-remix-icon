import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFundsBoxFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 3.003h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1v-16a1 1 0 011-1zm11.793 6.793l-2.45 2.45-2.121-2.122-4.243 4.243 1.414 1.414 2.829-2.828 2.121 2.12 3.864-3.863 1.793 1.793v-5h-5l1.793 1.793z" />
    </Svg>
  );
}

export default SvgFundsBoxFill;
