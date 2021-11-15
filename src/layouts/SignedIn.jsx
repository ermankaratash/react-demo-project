import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/48660429?s=40&v=4"
        />
        <Dropdown pointing="top right" text="erm">
          <Dropdown.Menu>
            <Dropdown.Item text="my profile" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="logout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
