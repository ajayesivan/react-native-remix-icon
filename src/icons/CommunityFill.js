import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCommunityFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm12 2H3a1 1 0 01-1-1v-7.513a1 1 0 01.343-.754L6 8.544V4a1 1 0 011-1h14a1 1 0 011 1v16a1 1 0 01-1 1zm-5-10v2h2v-2h-2zm0 4v2h2v-2h-2zm0-8v2h2V7h-2zm-4 0v2h2V7h-2z" />
    </Svg>
  );
}

export default SvgCommunityFill;
