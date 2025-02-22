
import React, { useCallback, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { LockKeyhole, SquarePen, Trash, Upload, UserCircle } from "lucide-react";
import { calculateVisibleColumns, myTheme, setColumnVisibility } from "@/lib/agridTableTheme";
import TableSkeletonLoader from "@/components/CustomComponents/Loaders/tableSkeletonLoader";
import SearchInput from "@/components/CustomComponents/Inputs/searchInput";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const rowSelection = {
  mode: "multiRow",
  headerCheckbox: true,
};

const UsersTable = ({ rowData, handleEditUser, handleDeleteUser, handleChangePass, onSelectData }) => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridRef = useRef();
  const [tableSkeletonLoader, setTableSkeletonLoader] = useState(false);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Name", field: "name", suppressSizeToFit: true,
      cellRenderer: (params) => (
        <span onClick={() => handleEditUser(params.data)} className='text-blue-500 cursor-pointer'>
          {params.value}
        </span>
      ),
    },

    {
      headerName: "Priviliges",
      field: "priviliges",
      suppressSizeToFit: true,
    },
    { headerName: "Email", field: "email" },
    { headerName: "Network Group", field: "networkGroup", suppressSizeToFit: true },
    { headerName: "Logo", field: "logo", suppressSizeToFit: true },
    { headerName: "Type", field: "type" },
    {
      headerName: "Action",
      field: "action",
      filter: false,
      cellRenderer: (params) => (
        <div className="flex justify-start items-center space-x-4">
          <div className='text-[white]' style={{ margin: '-1px' }}>.</div>
          <button
            className="border items-center border-gray-300 rounded-md p-1 cursor-pointer"
            onClick={() => handleEditUser(params.data)}
          >
            <SquarePen color="#418CFF" size={15} />
          </button>
          <div
            className="border items-center border-gray-300 rounded-md p-1 cursor-pointer"
            onClick={() => handleDeleteUser('single', params.data)}
          >
            <Trash color='red' size={15} />
          </div>
          <div
            className="border items-center border-gray-300 rounded-md p-1 cursor-pointer"
            onClick={() => handleChangePass(params.data)}
          >
            <LockKeyhole color='blue' size={15} />
          </div>
        </div>
      ),
    }


  ]);
  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      minWidth: 100,
      flex: 1,
    };
  }, []);
  const onGridSizeChanged = useCallback((params) => {
    const { columnsToShow, columnsToHide } = calculateVisibleColumns(params);
    setColumnVisibility(params, columnsToShow, columnsToHide);
    window.setTimeout(() => {
      params.api.sizeColumnsToFit();
    }, 10);
  }, [window]);

  const onFirstDataRendered = useCallback((params) => {
    params.api.sizeColumnsToFit();
  }, []);


  const onSelectionChanged = (event) => {
    onSelectData(event.api.getSelectedRows());
  };
  const onFilterTextBoxChanged = useCallback((value) => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      value,
    );
  }, []);
  const exportToExcel = () => {
    if (!rowData || rowData.length === 0) {
      alert("No data available to export!");
      return;
    }
    const worksheet = window.XLSX.utils.json_to_sheet(rowData);
    const workbook = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    const excelBuffer = window.XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(dataBlob, "Users.xlsx");
  };
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={containerStyle}>
        {rowData.length === 0 ? (
          !tableSkeletonLoader ? (
            <div className="p-2 flex items-center justify-center">
              <h1>NoData</h1>
            </div>
          ) : (
            <TableSkeletonLoader rows={8} columns={7} />
          )
        ) : (
          <div className="h-full w-full px-4 py-2 pb-4">
            <Card className='h-full w-full pb-2'>
              <CardContent className='h-full w-full p-0'>
                <div className="flex justify-between items-center h-[50px] p-2">
                  <SearchInput id="filter-text-box" onSearch={onFilterTextBoxChanged} />
                  <Button onClick={exportToExcel} variant='outline' className='border-primary'>
                    <Upload /><p>Export</p>
                  </Button>

                </div>
                <div style={{ height: 'calc(100% -  50px)', width: '100%',padding:'0px 8px' }}>
                  <div style={containerStyle}>
                    <AgGridReact
                      theme={myTheme}
                      ref={gridRef}
                      rowData={rowData}
                      columnDefs={columnDefs}
                      onGridSizeChanged={onGridSizeChanged}
                      onFirstDataRendered={onFirstDataRendered}
                      enableCellTextSelection={true}
                      defaultColDef={defaultColDef}
                      rowSelection={rowSelection}
                      onSelectionChanged={onSelectionChanged}
                      pagination={true}
                      paginationPageSize={20}
                      paginationPageSizeSelector={[10, 20, 50]}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersTable