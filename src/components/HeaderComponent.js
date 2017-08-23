import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ExitToAppIcon from 'material-ui-icons/ExitToApp';
import Typography from 'material-ui/Typography';
import Menu, {MenuItem} from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({    button: {

        "vertical-align": "bottom",
        "min-width": "0px",
        margin: 0,
        "height": "36px",
        padding: "0 8px"
    },
});

class HeaderComponent extends React.Component {

    state = {
        anchorEl: undefined,
        open: false,
    };

    handleClick = event => {
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };



    paintMenu(locale, canChangeLocale, classes, chooseLocale) {
        if (canChangeLocale) {

            const items = locale.locales.available.map(curLocale => {
                return <MenuItem
                    className={classes.button}
                    key={curLocale}
                    selected={curLocale === locale.current}
                    onClick={() => {
                        chooseLocale(locale.current, curLocale);
                        this.handleRequestClose();
                    }}>{curLocale.toUpperCase()}
                </MenuItem>
            });

            return <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
            >
                {items}
            </Menu>
        }
    }

    render() {
        let {title, logout, isLoggedIn, locale, canChangeLocale, classes, chooseLocale} = this.props;

        return <AppBar position="fixed" color="default">
            <Toolbar>
                <Typography type="title" color="inherit">
                    {title != null ? title : ""}
                </Typography>

                <div className="grid_spacer"/>
                <div className="appbar_actions">
                    {canChangeLocale &&
                    <Button className={classes.button} onClick={this.handleClick}>{locale.current}</Button>}
                    {isLoggedIn && <IconButton className={classes.button} aria-label="Log Out" onTouchTap={logout}>
                        <ExitToAppIcon/>
                    </IconButton>}
                </div>
            </Toolbar>
            {this.paintMenu(locale, canChangeLocale, classes, chooseLocale)}

        </AppBar>
    }
}

export default withStyles(styles)(HeaderComponent);
