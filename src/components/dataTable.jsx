import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../styles/accounts.css';
import { Modal } from '@mui/material';
import Module from './module';


export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [moduleOpen, setModuleOpen] = useState(false);

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
  
  const handleDelete = async (id) => {
    try {
      
      const confirmed = window.confirm("Are you sure you want to delete this school?");
      if (!confirmed) {
        return; 
      }
      
      const response = await fetch(`https://csms-backend.vercel.app/api/language-schools/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      setRows(rows.filter(row => row.id !== id));
      window.location.reload();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


  const handleEdit = async (id, updatedData) => {
    try {
      const response = await fetch(`https://csms-backend.vercel.app/api/language-schools/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
      const updatedRow = await response.json(); // Get the updated row data from the response
      const updatedRows = rows.map(row => {
        if (row.id === id) {
          return updatedRow; // Replace the existing row with the updated row
        }
        return row;
      });
      setRows(updatedRows);
      setEditDialogOpen(false); // Close the edit dialog
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
  
  
  
  
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'class', headerName: 'Class', width: 130 },
    { field: 'companyname', headerName: 'School', width: 150 },
    {
      field: 'users',
      headerName: 'Users',
      type: 'number',
      width: 80,
    },
    { field: 'firstname', headerName: 'Director First name', width: 180 },
    { field: 'lastname', headerName: 'Director Last name', width: 180 },
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

  return (
    <div style={{ height: 800, width: '100%', background: 'white' }}>
            <button className="btn" onClick={() => setModuleOpen(true)}>Add</button>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowClassName={getRowClassName}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 100]}
        checkboxSelection
      />

      {moduleOpen && <Module closeModule={() =>{setModuleOpen(false);}} />}
      
    </div>
  );
}
