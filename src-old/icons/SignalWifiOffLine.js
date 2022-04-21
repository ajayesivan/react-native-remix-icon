import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalWifiOffLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.808 1.393l17.677 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997a18 18 0 012.95-1.942L1.394 2.808l1.415-1.415zm.771 5.999L12 17.817l1.967-2.437-8.835-8.836c-.532.254-1.05.536-1.552.848zM12 3c4.284 0 8.22 1.497 11.31 3.996l-5.407 6.693-1.422-1.422 3.939-4.876A15.92 15.92 0 0012 5c-.873 0-1.735.07-2.58.207L7.725 3.51A18.077 18.077 0 0112 3z" />
    </Svg>
  );
}

export default SvgSignalWifiOffLine;
