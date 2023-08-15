import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function ThreadAppIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2.828 5.536l-1.392 1.393A2.5 2.5 0 1 0 9.5 7.5a2.498 2.498 0 0 0 2.828 3.535l1.392-1.392a4.5 4.5 0 1 1-6.364 6.364l-1.392 1.392a2.5 2.5 0 1 0 3.536 3.536l1.392-1.392a4.5 4.5 0 1 1 6.364-6.364l1.392-1.392a2.5 2.5 0 1 0-3.536-3.536z" />
    </SvgIcon>
  );
}

export default ThreadAppIcon;
