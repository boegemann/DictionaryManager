export const ROW_SELECTED = 'ROW_SELECTED';


export const rowSelected = (unitKey, rowData, selected) => {
    return {
      type: ROW_SELECTED,
      rowData: rowData,
      unitKey: unitKey,
      selected: selected
    }
  }
;
