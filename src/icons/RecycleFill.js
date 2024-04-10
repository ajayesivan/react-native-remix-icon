import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRecycleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.561 12.098l1.532 2.652A3.5 3.5 0 0118.06 20H16v2l-5-3.5 5-3.5v2h2.062a.5.5 0 00.471-.668l-.038-.082-1.53-2.652 2.597-1.5zM7.736 9.384l.531 6.08-1.731-1-1.032 1.786a.5.5 0 00.343.742l.09.008H9v3H5.937a3.5 3.5 0 01-3.031-5.25l1.032-1.786-1.733-1 5.531-2.58zM13.75 2.97A3.5 3.5 0 0115.03 4.25l1.031 1.786 1.733-1-.532 6.08-5.53-2.58 1.73-1-1.03-1.786a.5.5 0 00-.814-.074l-.052.074-1.53 2.652-2.598-1.5 1.53-2.652A3.5 3.5 0 0113.75 2.97z" />
    </Svg>
  );
}

export default SvgRecycleFill;
