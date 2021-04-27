import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Auth from "../../AuthService/Auth";
import { Link } from 'react-router-dom';
import CakeIcon from '@material-ui/icons/Cake';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {blue, red} from '@material-ui/core/colors';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import useStyles from "./MiniDrawer.styles";
import Data from "../../DataService/Data";
import Wish from '../Wish/Wish.Component';
import Birthdays from '../Birthdays/Birthdays.Component';
export default function MiniDrawer(props) {



  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [user, updateUser] = useState({});

  // For the menu selection
  const [menuStatus, updateMenuStatus] = useState({
    wish:true,
    birthdays:false
  })

  useEffect(()=>{
    Data.getCurrentAssociate(localStorage.getItem("token"))
  .then(res=>{updateUser(res)})
  },[])

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MenuIsNowWishes =() =>{
    updateMenuStatus({
      wish:true,
      birthdays:false
    })
  }

  const MenuIsNowBirthdays =() =>{
    updateMenuStatus({
      wish:false,
      birthdays:true
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Kiprosh Birthday Messeger
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        
        <ListItem button onClick={MenuIsNowWishes}>
              <ListItemIcon><MailIcon style={{ color: blue[800] }}/></ListItemIcon>
              <ListItemText primary="Add Wishes" />
            </ListItem>
        
        <ListItem button onClick={MenuIsNowBirthdays}>
          <ListItemIcon><CakeIcon style={{ color: blue[800] }} /> </ListItemIcon>
          <ListItemText primary="Birthdays" />
        </ListItem>

        </List>
        <Divider />
        <List>
         
       
        <ListItem >
            <ListItemIcon><FaceOutlinedIcon style={{ color: blue[800] }}/></ListItemIcon>
            <ListItemText primary={
              user.data?
              user.data.firstName + " " + user.data.lastName
              :"User"
            }/>
          </ListItem>
          <Link to="/signin" onClick={()=>{Auth.signOut(props.updateSigned)}} >
          <ListItem button style={{ color: red[700] }}  >
            <ListItemIcon><ExitToAppIcon style={{ color: red[700] }}  /></ListItemIcon>
            <ListItemText primary="Sign Out"/>
          </ListItem>
          </Link>
          
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          menuStatus.wish? <Wish currentUserId={user.data?user.data.id:null}/>: menuStatus.birthdays? <Birthdays /> : "Unexpected Menu state"
        }
      </main>
    </div>
  );
}
