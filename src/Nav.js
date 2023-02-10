import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import { Drawer } from '@mui/material'
import { Box } from '@mui/material';
import { List } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Collapse } from '@mui/material';
import { Divider } from '@mui/material';
// import ListItemIcon from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon  from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors'
import { Context } from './ContextData';
import './nav.css'

const Nav = ({ status }) => {
    const [state, setState] = useState({
        left: false
    })
    const [openFirstNav, setOpenFirstNav] = useState(true)
    const [openSecondNav, setOpenSecondNav] = useState(true)
    const loggedData = useContext(Context)

    const handleClick = (event) => {
        if (event.nativeEvent.target.outerText === 'Store') setOpenFirstNav(!openFirstNav)
        else setOpenSecondNav(!openSecondNav)
        console.log(event, event.target, event.nativeEvent.path)
    }
    console.log('Nav', status, loggedData)
    const toggleDrawer = (anchor, open) => event => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
        
        setState({ ...state, [anchor]: open})
    }

    const list = anchor => (
        <Box
            sx={{ width: 250, background: '#242424', height: '100%' }}
            role='presentation'
        >
            <List disablePadding>
                {loggedData.log === false ? <ListItemButton>
                    <Link 
                    className='store-link' 
                    to='/login' 
                    state={{ data: 'logData' }}><ListItemText sx={{ color: 'grey' }} primary='Login' /></Link>
                </ListItemButton>
                :
                <ListItemButton className='avatar-block'>
                    <Avatar sx={{ bgcolor: red[500], padding: '.15em' }} variant='square'>M</Avatar>
                    <h4>UserName</h4>
                </ListItemButton>}
                <Divider />
                <ListItemButton onClick={handleClick}>
                    <ListItemText sx={{ color: 'grey', pointerEvents: 'none' }} primary='Store' />
                    {!openFirstNav ? <KeyboardArrowUpIcon sx={{ color: '#787878', pointerEvents: 'none' }} /> : <KeyboardArrowDownIcon sx={{ color: '#787878', pointerEvents: 'none' }} /> }
                </ListItemButton>
                <Divider />
                <Collapse in={openFirstNav} timeout='auto' unmountOnExit>
                    <List disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='Home' />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='Wishlist' />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='Points Shop' />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='News' />
                        </ListItemButton>
                        <Divider />
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemText sx={{ color: 'grey', pointerEvents: 'none' }} primary='Community' />
                    {!openSecondNav ? <KeyboardArrowUpIcon sx={{ color: '#787878', pointerEvents: 'none' }} /> : <KeyboardArrowDownIcon sx={{ color: '#787878', pointerEvents: 'none' }} />}
                </ListItemButton>
                <Divider />
                <Collapse in={openSecondNav} timeout='auto' unmountOnExit>
                    <List disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='Home' />
                            {/* DO A COMMUNITY HOME PAGE, IF POSSIBLE */}
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='Discussions' />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText sx={{ color: 'grey' }} primary='Market' />
                        </ListItemButton>
                        <Divider />
                    </List>
                </Collapse>

                <ListItemButton>
                    <ListItemText sx={{ color: 'grey' }} primary='Support' />
                </ListItemButton>
                <Divider />
                {loggedData.log === true ? <ListItemButton>
                    <ListItemText sx={{ color: 'grey' }} primary='Logout' />
                </ListItemButton> : null}
                <Divider />
            </List>
        </Box>
    )

    return (
        <nav>
            {['left'].map((anchor) => (
                <div key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{color: 'lightgrey'}} fontSize='large' /></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        variant='temporary'
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
            <Link to='/'>
                <img src='https://store.akamai.steamstatic.com/public/shared/images/responsive/header_logo.png' alt='Steam icon' />
            </Link>
            
        </nav>
    )
}

export default Nav