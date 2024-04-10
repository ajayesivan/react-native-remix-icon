import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBroadcastLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.929 2.929l1.414 1.414A7.975 7.975 0 004 10c0 2.21.895 4.21 2.343 5.657L4.93 17.07A9.969 9.969 0 012 10a9.969 9.969 0 012.929-7.071zm14.142 0A9.969 9.969 0 0122 10a9.97 9.97 0 01-2.929 7.071l-1.414-1.414A7.975 7.975 0 0020 10c0-2.21-.895-4.21-2.343-5.657L19.07 2.93zM7.757 5.757l1.415 1.415A3.987 3.987 0 008 10c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.981 5.981 0 016 10c0-1.657.672-3.157 1.757-4.243zm8.486 0A5.981 5.981 0 0118 10a5.981 5.981 0 01-1.757 4.243l-1.415-1.415A3.988 3.988 0 0016 10a3.987 3.987 0 00-1.172-2.828l1.415-1.415zM12 12a2 2 0 110-4 2 2 0 010 4zm-1 2h2v8h-2v-8z" />
    </Svg>
  );
}

export default SvgBroadcastLine;