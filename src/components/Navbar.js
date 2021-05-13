import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from '@material-ui/core'
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from '@material-ui/icons'
import avatar from '../lezo.jpg'

//css Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: '#fff',
  },
}))

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contact',
    listPath:"/contact"
  },
]

const Navbar = () => {
  const classes = useStyles()
  const [state, setState] = useState({
    right: false,
  })
  const toggleSlider = (slider, open) => {
    setState({ ...state, [slider]: open })
  }

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component='div'
      onClick={() => setState({ ...state, right: false })}
    >
      <Avatar className={classes.avatar} src={avatar} alt='Surafel Melese' />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#000000' }}>
          <Toolbar>
            <IconButton onClick={() => setState({ ...state, right: true })}>
              <ArrowBack style={{ color: '#fff' }} />
            </IconButton>
            <Typography variant='h5' style={{ color: 'tan' }}>
              Surafel Melese's Portfolio
            </Typography>
            <MobileRightMenuSlider
              open={state.right}
              onClose={() => setState({ ...state, right: false })}
            >
              {sideList('right')}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
