import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboard3Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.596 5.404a.595.595 0 00-.763-.067c-2.89 2.028-4.52 3.23-4.894 3.602a1.502 1.502 0 000 2.122 1.502 1.502 0 002.122 0c.219-.22 1.418-1.851 3.598-4.897a.59.59 0 00-.063-.76zM17.5 11a1 1 0 100 2 1 1 0 000-2zm-11 0a1 1 0 100 2 1 1 0 000-2zm2.318-3.596A1 1 0 107.404 8.82a1 1 0 001.414-1.416zM12 5.5a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgDashboard3Fill;
