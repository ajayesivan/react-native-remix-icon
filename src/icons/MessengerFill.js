import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMessengerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 2c5.633 0 10 4.127 10 9.7 0 5.573-4.367 9.7-10 9.7a10.893 10.893 0 01-2.895-.384.8.8 0 00-.534.039l-1.985.876a.8.8 0 01-1.123-.707l-.054-1.78a.797.797 0 00-.269-.57c-1.945-1.74-3.14-4.258-3.14-7.174 0-5.573 4.366-9.7 10-9.7zM5.996 14.537c-.282.447.268.951.689.631l3.155-2.394a.6.6 0 01.723 0l2.336 1.75a1.5 1.5 0 002.17-.4l2.937-4.66c.282-.448-.268-.952-.689-.633l-3.155 2.396a.6.6 0 01-.723 0l-2.337-1.75a1.5 1.5 0 00-2.169.4l-2.937 4.66z" />
    </Svg>
  );
}

export default SvgMessengerFill;
