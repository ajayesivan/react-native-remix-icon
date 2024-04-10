import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeFundsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.378 4.513a9.962 9.962 0 016.627-2.51c5.523 0 10 4.477 10 10a9.954 9.954 0 01-1.793 5.715l-2.707-5.715h2.5A8 8 0 006.279 6.415l-.9-1.902zm13.253 14.98a9.962 9.962 0 01-6.626 2.51c-5.523 0-10-4.477-10-10 0-2.125.663-4.095 1.793-5.715l2.707 5.715h-2.5A8 8 0 0017.73 17.59l.901 1.902zM13.42 14.83l-2.828-2.828-2.829 2.828-1.414-1.414 4.243-4.243 2.828 2.829 2.828-2.829 1.415 1.415-4.243 4.242z" />
    </Svg>
  );
}

export default SvgExchangeFundsFill;
