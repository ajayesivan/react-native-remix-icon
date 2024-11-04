import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeDollarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.378 4.513a9.962 9.962 0 016.627-2.51c5.523 0 10 4.477 10 10a9.954 9.954 0 01-1.793 5.715l-2.707-5.715h2.5A8 8 0 006.279 6.415l-.9-1.902zm13.253 14.98a9.962 9.962 0 01-6.626 2.51c-5.523 0-10-4.477-10-10 0-2.125.663-4.095 1.793-5.715l2.707 5.715h-2.5A8 8 0 0017.73 17.59l.901 1.902zm-10.126-5.49h5.5a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1v-1h2v1h2.5v2h-5.5a.5.5 0 000 1h4a2.5 2.5 0 010 5h-1v1h-2v-1h-2.5v-2z" />
    </Svg>
  );
}

export default SvgExchangeDollarFill;
