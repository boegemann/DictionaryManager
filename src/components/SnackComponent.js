import React from 'react'
import Snackbar from 'material-ui/Snackbar'


class SnackComponent extends React.Component {

    componentWillReceiveProps({open, closeSnack}) {
        if (open === true) {
            window.setTimeout(closeSnack, 3000);
        } else {
            console.log("received closed")
        }
    }

    render() {
        let {text, duration, level, open=false} = this.props;
        return <Snackbar
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            open={open}
            SnackbarContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{text}</span>}
        />;
    }
}


export default SnackComponent;
