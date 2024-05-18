import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useContext } from "react";
import { AuthContext } from "../../Store/authprovider";
import { SettingsOutlined } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  
const auth= useContext(AuthContext)
const {users, loginState}= auth 
console.log(users, loginState)
  const sidebarcontent= [

   
    {title: 'Users', icon: <PersonOutlineIcon className="icon" />}, 
    {title: 'Products', icon: <StoreIcon className="icon" />,link: 'admin/products' }, 
    {title: 'Orders', icon:<CreditCardIcon className="icon" />}, 
    {title: 'Delivery', icon: <LocalShippingIcon className="icon" />}, 

  ]
  return (
    <div className="sidebar">
          <span className="logo">Admin Dashboard</span>
          <div> 
          {sidebarcontent.map(({title, icon, link}, index)=>{
          return <ListItem key={title} disablePadding>
          <ListItemButton component={Link} to={link}>
         <ListItemIcon className="icon">
         {icon} </ListItemIcon>
         <ListItemText className='text' primary={title} />
         </ListItemButton>
         </ListItem>})}
         </div>
        <hr/>
        <div className="center">
       <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
       <Avatar alt="User Photo" />
       <Box>
      <Typography className="username" variant="subtitle1">{users.username}</Typography>
      </Box>
      <IconButton>
     
      </IconButton>
    </Box>
      </div>  
    </div>
  );
};

export default Sidebar;