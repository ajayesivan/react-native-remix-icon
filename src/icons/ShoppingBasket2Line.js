import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShoppingBasket2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.37 3.44l3.212 5.562h3.423v2h-1.167l-.757 9.083a1 1 0 01-.996.917H4.925a1 1 0 01-.997-.917l-.757-9.083H2.005v-2h3.422L8.639 3.44l1.732 1-2.634 4.562h8.535L13.639 4.44l1.732-1zm3.46 7.562H5.179l.667 8h12.319l.667-8zm-5.825 2v4h-2v-4h2zm-4 0v4h-2v-4h2zm8 0v4h-2v-4h2z" />
    </Svg>
  );
}

export default SvgShoppingBasket2Line;
