import { themeQuartz } from "ag-grid-community"; 

const myTheme = themeQuartz.withParams({
    headerBackgroundColor: '#F0F6FF',
    rowHoverColor: 'rgb(216, 226, 255)',
    fontFamily: "Nunito Sans, sans-serif",
    fontSize: 14,
    headerFontSize: 15,
    rowBorder: { style: 'solid', width: 1,  },
    columnBorder: { style: 'solid', width: 1, },
    headerColumnBorder: { color: '#d2d6d4' },
    headerColumnBorderHeight: '100%',
});

const calculateVisibleColumns = (params) => {
    const gridWidth = document.querySelector(".ag-body-viewport").clientWidth;
    const columnsToShow = [];
    const columnsToHide = [];
    let totalColsWidth = 0;
    const allColumns = params.api.getColumns();

    if (allColumns && allColumns.length > 0) {
        for (let i = 0; i < allColumns.length; i++) {
            const column = allColumns[i];
            totalColsWidth += column.getMinWidth();
            if (totalColsWidth > gridWidth) {
                columnsToHide.push(column.getColId());
            } else {
                columnsToShow.push(column.getColId());
            }
        }
    }

    return { columnsToShow, columnsToHide };
};

const setColumnVisibility = (params, columnsToShow, columnsToHide) => {
    params.api.setColumnsVisible(columnsToShow, true);
    params.api.setColumnsVisible(columnsToHide, false);
};

export { myTheme, calculateVisibleColumns, setColumnVisibility };