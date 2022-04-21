import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeFundsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.373 4.51A9.962 9.962 0 0112 2c5.523 0 10 4.477 10 10a9.954 9.954 0 01-1.793 5.715L17.5 12H20A8 8 0 006.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0112 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0013.726 5.587l.9 1.902zm-5.213-4.662L10.586 12l-2.829 2.828-1.414-1.414 4.243-4.242L13.414 12l2.829-2.828 1.414 1.414-4.243 4.242z" />
    </Svg>
  );
}

export default SvgExchangeFundsFill;
