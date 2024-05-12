import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/accounts.css';
import { Modal } from '@mui/material';
import Module from './module';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'username', headerName: 'Username', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const getRowClassName = (params) => {
  return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
};

export default function DataUsers() {
  const [rows, setRows] = useState([]);
  const [moduleOpen, setModuleOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://csms-backend.vercel.app/users');
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
      <button className="btn" onClick={() => setModuleOpen(true)}>Add</button>
      {moduleOpen && <Module closeModule={() =>{setModuleOpen(false);}} />}
      
    </div>
  );
}
