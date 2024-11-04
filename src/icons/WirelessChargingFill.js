import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgWirelessChargingFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.929 4.929l1.414 1.414A7.975 7.975 0 003 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.969 9.969 0 011 12a9.969 9.969 0 012.929-7.071zm16.142 0A9.968 9.968 0 0123 12a9.968 9.968 0 01-2.929 7.071l-1.414-1.414A7.975 7.975 0 0021 12a7.975 7.975 0 00-2.342-5.656L20.07 4.93zM13 5v6h3l-5 8v-6H8l5-8zM6.757 7.757l1.415 1.415A3.988 3.988 0 007 12c0 1.104.448 2.104 1.172 2.828l-1.415 1.415A5.981 5.981 0 015 12c0-1.657.672-3.157 1.757-4.243zm10.487.001A5.981 5.981 0 0119 12a5.981 5.981 0 01-1.757 4.243l-1.415-1.415A3.987 3.987 0 0017 12a3.987 3.987 0 00-1.17-2.827l1.414-1.415z" />
    </Svg>
  );
}

export default SvgWirelessChargingFill;
