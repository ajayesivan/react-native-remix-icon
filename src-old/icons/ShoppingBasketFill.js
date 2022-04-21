import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBasketFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a6 6 0 016 6v1h4v2h-1.167l-.757 9.083a1 1 0 01-.996.917H4.92a1 1 0 01-.996-.917L3.166 11H2V9h4V8a6 6 0 016-6zm1 11h-2v4h2v-4zm-4 0H7v4h2v-4zm8 0h-2v4h2v-4zm-5-9a4 4 0 00-3.995 3.8L8 8v1h8V8a4 4 0 00-3.8-3.995L12 4z" />
    </Svg>
  );
}

export default SvgShoppingBasketFill;
