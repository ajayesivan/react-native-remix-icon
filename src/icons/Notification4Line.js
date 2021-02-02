import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotification4Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 10a6 6 0 10-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 01-.4.8H4a.5.5 0 01-.4-.8l.4-.533V10a8 8 0 1116 0v8.667zM9.5 21h5a2.5 2.5 0 11-5 0z" />
    </Svg>
  );
}

export default SvgNotification4Line;
