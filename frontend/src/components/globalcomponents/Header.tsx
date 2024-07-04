import { Avatar, List, ListItem, Wrap, WrapItem } from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
// import DrawerMenu from "../DrawerMenu";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <>
      <section>
        <div className="flex justify-between align-middle border-b-2 shadow-lg px-5 sm:px-20">
          <div className=" flex gap-2 p-2 font-bold">
            <div>
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Segun Adebayo"
                    src="../../../public/assets/Ranjit Rai IMG_7080 00s.jpg"
                  />
                </WrapItem>
              </Wrap>
            </div>
            <div>
              <h1>Rajnit</h1>
              <span>Web developer</span>
            </div>
          </div>

          <div className=" hidden md:flex">
            <List className=" flex align-middle justify-center items-center gap-9 px-2 font-semibold">
              <ListItem>
                {" "}
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <Link to="/about">About</Link>{" "}
              </ListItem>
              {/* <ListItem>Education </ListItem>
              <ListItem>Skills </ListItem> */}
              <ListItem>
                <Link to="/contact">Contact</Link>{" "}
              </ListItem>
            </List>
          </div>
          <div className=" md:hidden flex align-middle justify-center items-center">
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              <CgMenu />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
