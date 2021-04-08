import { React, Fragment } from "react";
import ProfileImage from "./components/profileimages";
import { Button } from "@material-ui/core";

function Profile() {
  return (
    <Fragment>
      <ProfileImage />
      <Button color="primary">Profile</Button>
    </Fragment>
  );
}

export default Profile;
