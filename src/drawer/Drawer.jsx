import React from 'react';
import{Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText}from '@mui/material';

const Drawer = () => {
  return (
    <React.Fragment>
        <Drawer open ={true}>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                                login
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
    </React.Fragment>
  )
}

export default Drawer