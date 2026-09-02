import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";

const UserOption = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        icon={
            <img
                className="SpeedDialIcon"
                alt="Profile"
                src="/Profile.png"
            />
        }
      ></SpeedDial>
    </Fragment>
  );
};

export default UserOption;
