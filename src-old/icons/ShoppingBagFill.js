import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBagFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 1a5 5 0 015 5v2h3a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h3V6a5 5 0 015-5zm5 10h-2v1a1 1 0 001.993.117L17 12v-1zm-8 0H7v1a1 1 0 001.993.117L9 12v-1zm3-8a3 3 0 00-2.995 2.824L9 6v2h6V6a3 3 0 00-2.824-2.995L12 3z" />
    </Svg>
  );
}

export default SvgShoppingBagFill;
