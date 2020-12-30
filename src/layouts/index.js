import React, { Component, Fragment } from 'react'
import {
    AppBar, Toolbar, IconButton, Typography, Hidden,
    Drawer, CssBaseline, MenuList, MenuItem
} from '@material-ui/core'
import '../stylesheets/layoutstyles.css'
import SubMenu from '../components/submenu'
import { responsiveFontSizes, withStyles, createMuiTheme } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import { compose } from 'recompose'
import { graphql, Link } from "gatsby"
import { rhythm } from '../utils/typography'


const drawerWidth = 240


const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex', 
        width: '100%',
        padding: rhythm(1),
        marginBottom: rhythm(1.5),
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
        display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
        position: 'relative',
        },
    },
    content: {
        flexGrow: 1,
        // backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
})

class Layout extends Component {
    state = {
        mobileOpen: false
    }

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen })
    }

    render() {
        const { classes, children, location } = this.props
        
        const { mobileOpen } = this.state

        // console.log("data in layout compoent ", data)

        const drawer = (
        <div>
            <Hidden smDown>
            <div className={classes.toolbar} />
            </Hidden>
            <MenuList>
            <MenuItem component={Link} to="/">
                Home
            </MenuItem>
            <MenuItem component={Link} to="/about" >
                About
            </MenuItem>
            <MenuItem to="/posts" >
                Posts
            </MenuItem>

                <SubMenu nested={classes.nested}/>
                
            </MenuList> 
        </div>
        )

        return <Fragment>
        <CssBaseline/>

        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
            <Toolbar variant="regular">
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
                >
                <Menu />
                </IconButton>
                <h6 className="header-tagline" style={{fontFamily: "Source Sans Pro"}}  noWrap> 
                    100 Days Of Code Blog
                </h6>
            </Toolbar>
            </AppBar>
            <Hidden mdUp>
            <Drawer
                variant="temporary" 
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{ 
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
            <Drawer
                variant="permanent"
                open
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <main className={classes.content}> 
                <div className={classes.toolbar} /> 
                {children}
            </main>
        </div>
        </Fragment>
        }

        
    }


    export default compose(withStyles(styles))(Layout)