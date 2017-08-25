export const ROWS_SELECTED = 'ROWS_SELECTED';


export const rowsSelected = (unitKey, rows) => {
        return {
            type: ROWS_SELECTED,
            rows: rows,
            unitKey: unitKey
        }
    }
;
