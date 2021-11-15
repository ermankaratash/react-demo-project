import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button primary onClick={props.signIn}>Login</Button>
        <Button positive style={{marginLeft:"0.5em"}}>Signin</Button>
      </Menu.Item>
    </div>
  );
}
