import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBasketLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.005 2a6 6 0 016 6v1h4v2h-1.167l-.757 9.083a1 1 0 01-.996.917H4.925a1 1 0 01-.997-.917L3.171 11H2.005V9h4V8a6 6 0 016-6zm6.826 9H5.178l.667 8h12.319l.667-8zm-5.826 2v4h-2v-4h2zm-4 0v4h-2v-4h2zm8 0v4h-2v-4h2zm-5-9A4 4 0 008.01 7.8l-.005.2v1h8V8a4 4 0 00-3.8-3.995l-.2-.005z" />
    </Svg>
  );
}

export default SvgShoppingBasketLine;
