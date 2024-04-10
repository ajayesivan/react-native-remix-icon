import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBagFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 1a5 5 0 015 5v2h3a1 1 0 011 1v12a1 1 0 01-1 1h-16a1 1 0 01-1-1V9a1 1 0 011-1h3V6a5 5 0 015-5zm5 10h-2v1a1 1 0 001.993.116l.007-.116v-1zm-8 0h-2v1a1 1 0 001.993.116L9.005 12v-1zm3-8A3 3 0 009.01 5.823L9.005 6v2h6V6a3 3 0 00-2.824-2.995L12.005 3z" />
    </Svg>
  );
}

export default SvgShoppingBagFill;
