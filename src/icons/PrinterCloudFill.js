import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPrinterCloudFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 2h10a1 1 0 011 1v3H6V3a1 1 0 011-1zm15 7a1 1 0 00-1-1H3a1 1 0 00-1 1v10a1 1 0 001 1h2v-5h7.194c.243-.891.715-1.688 1.417-2.39C14.685 11.538 15.98 11 17.5 11c1.519 0 2.815.537 3.89 1.61.227.229.43.466.61.714V9zM8 10v2H5v-2h3zm13 6.5a3.5 3.5 0 10-7 0l.003.102a2.751 2.751 0 00.58 5.393l.167.005h5.5l.168-.005a2.75 2.75 0 00.58-5.392L21 16.5zM7 17h3.562A4.617 4.617 0 0010 19.25c0 1.032.29 1.949.871 2.75H7v-5z" />
    </Svg>
  );
}

export default SvgPrinterCloudFill;
