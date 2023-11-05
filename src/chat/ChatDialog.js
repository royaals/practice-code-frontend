import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { Dialog, Box, styled } from "@mui/material";
import Menu from './menu/Menu';
import Emptychat from './chat/Emptychat';
import Chatbox from './chat/Chatbox';
const dialogstyle = {
  height: "94%",
  width: "85%",
  marginTop: "1%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: "0",
 
};
const Component= styled(Box)`
  display: flex;
`

const LeftComponent =styled(Box)`
   min-width: 450px;
`
const RightComponent=styled(Box)`
   width: 73%;
   min-width: 300px;
   height: 100%;
   border-left: 1px solid #d1d7db;
`
const ChatDialog = () => {
  const {person }= useContext(AccountContext);
  return (
   
      <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Component>
        <LeftComponent>
           <Menu/>
        </LeftComponent>
        <RightComponent>
         
         {Object.keys(person).length ? <Chatbox/>:<Emptychat/>}
        </RightComponent>

      </Component>
      </Dialog>
      
    
  )
}

export default ChatDialog
