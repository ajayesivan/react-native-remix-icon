import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAccountPinCircleLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.745 21.745C5.308 20.722 2 16.747 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.747-3.308 8.722-7.745 9.745L12 24l-2.255-2.255zm-2.733-3.488a7.953 7.953 0 003.182 1.539l.56.129L12 21.172l1.247-1.247.56-.13a7.956 7.956 0 003.36-1.686A6.979 6.979 0 0012.16 16c-2.036 0-3.87.87-5.148 2.257zM5.616 16.82A8.975 8.975 0 0112.16 14a8.972 8.972 0 016.362 2.634 8 8 0 10-12.906.187zM12 13a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgAccountPinCircleLine;
