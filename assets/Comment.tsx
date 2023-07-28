import * as React from "react";
import Svg, { Mask, Path } from "react-native-svg";

const Comment: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        d="M21.452 17.63A10.949 10.949 0 0 0 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11a10.95 10.95 0 0 0 5.64-1.555l5.208 1.396-1.396-5.21Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="#fff"
      d="m21.452 17.63-1.546-.922a1.8 1.8 0 0 0-.193 1.388l1.739-.465Zm-3.811 3.816.466-1.74a1.8 1.8 0 0 0-1.39.195l.924 1.544Zm5.207 1.395-.466 1.738a1.8 1.8 0 0 0 2.204-2.204l-1.738.466ZM21.2 12a9.149 9.149 0 0 1-1.294 4.708l3.091 1.845A12.749 12.749 0 0 0 24.8 12h-3.6ZM12 2.8a9.2 9.2 0 0 1 9.2 9.2h3.6C24.8 4.93 19.07-.8 12-.8v3.6ZM2.8 12A9.2 9.2 0 0 1 12 2.8V-.8C4.93-.8-.8 4.93-.8 12h3.6Zm9.2 9.2A9.2 9.2 0 0 1 2.8 12H-.8c0 7.07 5.73 12.8 12.8 12.8v-3.6Zm4.716-1.299A9.149 9.149 0 0 1 12 21.2v3.6c2.396 0 4.644-.66 6.565-1.81l-1.849-3.089Zm.459 3.283 5.207 1.395.932-3.477-5.207-1.395-.932 3.477Zm7.412-.81-1.397-5.21-3.477.932 1.396 5.21 3.477-.931Z"
      mask="url(#a)"
    />
  </Svg>
);
export default Comment;
