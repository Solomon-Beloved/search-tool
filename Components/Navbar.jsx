import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import React from "react";

const Navigation = () => {
  return (
    <div>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand>
            <h1 className="text-2xl justify-start flex">Research</h1>
          </NavbarBrand>
          <NavbarContent as="div">
            <Input placeholder="Type to Search....." size="md" />
          </NavbarContent>
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                color="secondary"
                size="sm"
                className="transition transform"
              />
            </DropdownTrigger>

            <DropdownMenu>
              <DropdownItem>My settings</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Navigation;
