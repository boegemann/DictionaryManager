import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ExitToAppIcon from 'material-ui-icons/ExitToApp';
import Typography from 'material-ui/Typography';

class HeaderComponent extends React.Component {


    render() {
        let {title, logout, isLoggedIn} = this.props;

        return <AppBar position="fixed" color="default">
            <Toolbar>
                <Typography type="title" color="inherit">
                    {title != null ? title : ""}
                </Typography>

                <div className="grid_spacer"/>
                <div className="grid_actions">
                    {isLoggedIn() && <IconButton aria-label="Log Out" onTouchTap={logout}>
                        <ExitToAppIcon/>
                    </IconButton>}
                </div>
            </Toolbar>
        </AppBar>
    }
}


export default HeaderComponent;
