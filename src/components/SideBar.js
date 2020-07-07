import React, { Component } from "react";
import { Label, Menu } from "semantic-ui-react";

export default class SideBar extends Component {
  state = { activeItem: "inbox" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu vertical inverted>
        <Menu.Item></Menu.Item>
        <Menu.Item
          name="inbox"
          active={activeItem === "inbox"}
          onClick={this.handleItemClick}
        >
          <Label color="teal">1</Label>
          Inbox
        </Menu.Item>

        <Menu.Item
          name="spam"
          active={activeItem === "spam"}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          Spam
        </Menu.Item>

        <Menu.Item
          name="updates"
          active={activeItem === "updates"}
          onClick={this.handleItemClick}
        >
          <Label>1</Label>
          Updates
        </Menu.Item>
      </Menu>
    );
  }
}
