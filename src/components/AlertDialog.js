import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

export default class AlertDialog extends Component {

    constructor() {
        super()
        this.props = {
            title: "",
            open:false,
            contentText: "",
            btnOkCaption: "OK",
            btnCancelCaption: "Cancel",
            actionOK: () => {
                alert("OK")
            }
        }
    }

    state = {
        open: false
    };

    handleRequestClose = () => {
        this.setState({open: false});
    };

    handleRequestOk = () => {
        this.props.actionOK();
        this.setState({open: false});
    };

    componentWillReceiveProps(nextProps){
        this.setState({open: nextProps.open});
    }

    render() {

        var {
            title, contentText, btnOkCaption, btnCancelCaption} = this.props

        return (

            <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{contentText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleRequestClose} color="primary">
                        {btnCancelCaption}
                    </Button>
                    <Button onClick={this.handleRequestOk} color="primary">
                        {btnOkCaption}
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}