import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/accounts.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'class', headerName: 'Class', width: 130 },
  { field: 'companyName', headerName: 'School', width: 150 },
  {
    field: 'users',
    headerName: 'Users',
    type: 'number',
    width: 80,
  },
  { field: 'firstName', headerName: 'Director First name', width: 180 },
  { field: 'lastName', headerName: 'Director Last name', width: 180 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 160
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 160,
  },
  // Edit button column
  {
    field: 'edit',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <strong>
        <button onClick={() => handleEdit(params.row.id)}>Edit</button>
      </strong>
    ),
  },
  // Delete button column
  {
    field: 'delete',
    headerName: '',
    width: 100,
    renderCell: (params) => (
      <strong>
        <button onClick={() => handleDelete(params.row.id)}>Delete</button>
      </strong>
    ),
  },
];

const getRowClassName = (params) => {
  return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
};

export default function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://csms-backend.vercel.app/api/language-schools');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ height: 800, width: '100%', background: 'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowClassName={getRowClassName}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 100]}
        checkboxSelection
      />
    </div>
  );
}
