import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Avatar, Grid, Box} from "@material-ui/core"
import avatar from '../eid.png'
import Typed from 'react-typed'

//css styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(2),
  },
  title: {
    color: 'red',
  },
  subTitle: {
    color: 'tan',
    marginBottom: '5rem',
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    textAlign: 'center',
    zIndex: 1,
  },
}))
const Header = () => {
 const classes = useStyles()
 return (
   <Box className={classes.typedContainer}>
     <Grid container justify='center'>
       <Avatar className={classes.avatar} src={avatar} alt='Surafel Melese' />
     </Grid>
     <Typography className={classes.title} variant='h1'>
       <Typed strings={['ኢድ ሙባረክ']} typeSpeed={40} />
     </Typography>
     {/* <Typography className={classes.subTitle} variant='h5'>
       <Typed
         strings={['PERN stack', 'Web Design', 'Web Development']}
         typeSpeed={40}
         backSpeed={50}
         loop
       />
     </Typography> */}
   </Box>
 )
}

export default Header
