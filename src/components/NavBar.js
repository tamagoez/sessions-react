// import './tailwind.css'
// import './index.css'

import React from 'react';              //Reactを読み込んでいる
// import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Flex,
  Box,
  Spacer,
  IconButton,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  Heading,
  Button
} from '@chakra-ui/react'

import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div>
      <Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<GiHamburgerMenu />}
          variant='outline'
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command='⌘T'>
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command='⌘O'>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
        <Box p='2'>
          <Heading size='md'>Sessions</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme='teal'>Login</Button>
        </Box>
      </Flex>
    </div>
  )
}
