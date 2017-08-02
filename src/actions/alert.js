export const ALERT = 'ALERT';



export const createAlert = ({title, contentText="", btnOkCaption="Ok", btnCancelCaption="Cancel", actionOK}) => {
    return {
        type: ALERT,
        title: title,
        open: true,
        contentText: contentText,
        btnOkCaption: btnOkCaption,
        btnCancelCaption: btnCancelCaption,
        actionOK: actionOK
    }
}

