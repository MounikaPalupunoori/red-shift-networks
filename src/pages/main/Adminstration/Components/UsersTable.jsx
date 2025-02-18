/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Delete, SquarePen, Trash, UserCircle } from "lucide-react";
import SkeletonLoader from '@/components/CustomComponents/tableSkeletonLoader';
import { calculateVisibleColumns, myTheme, setColumnVisibility } from '@/lib/agridTableTheme';
const UserListTable = ({data, handleEditUser,handleDeleteUser }) => {
const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
const usersData = data
const [tableSkeletonLoader,setTableSkeletonLoader]=useState(false)
  const [colDefs] = useState([
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
      resizable: true,
      cellRenderer: (params) => (
        <div className="flex items-center space-x-4">
          <div className='text-[white]'>.</div>
          <div
            className="border items-center border-gray-300 rounded-md p-1 cursor-pointer"
            onClick={() => handleEditUser(params.data)}
          >
            <SquarePen color="#418CFF" size={15} />
           
          </div>
          <div
            className="border items-center border-gray-300 rounded-md p-1 cursor-pointer"
            onClick={() => handleDeleteUser(params.data)}
          >
            <Trash color='red' size={15}/>
          </div>
        </div>
      ),
    },

  ]);

  
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

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={containerStyle}>
        {usersData.length === 0 ? (
          !tableSkeletonLoader ? (
            <div className="p-2 flex items-center justify-center">
              <p>No Data</p>
            </div>
          ) : (
            <SkeletonLoader rows={8} columns={7} />
          )
        ) : (
          <div className="example-wrapper" style={{ height: '90%', width: '100%' }}>
            <div style={containerStyle}>
              <AgGridReact
                theme={myTheme}
                rowData={usersData}
                columnDefs={colDefs}
                suppressPaginationPanel={true}
                suppressScrollOnNewData={true}
                onGridSizeChanged={onGridSizeChanged}
                onFirstDataRendered={onFirstDataRendered}
                enableCellTextSelection={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserListTable;