import { createPortal } from "react-dom";

function PlayingDialog() {
  return createPortal(<dialog></dialog>, document.body);
}

export default PlayingDialog;
