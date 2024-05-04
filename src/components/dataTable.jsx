import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
];

const rows = [
  { id: 1, class: 'A', companyName: 'English Language School', city: 'New York', country: 'United States', lastName: 'Smith', firstName: 'John', users: 25},
  { id: 2, class: 'C', companyName: 'School of English', city: 'London', country: 'United Kingdom', lastName: 'Smith', firstName: 'Kat', users: 15},
  { id: 3, class: 'B', companyName: 'School of French', city: 'Paris', country: 'France', lastName: 'Jones', firstName: 'Alice', users: 20},
  { id: 4, class: 'A', companyName: 'German Language Institute', city: 'Berlin', country: 'Germany', lastName: 'Johnson', firstName: 'Michael', users: 28},
  { id: 5, class: 'C', companyName: 'Italian Language School', city: 'Rome', country: 'Italy', lastName: 'Brown', firstName: 'Emily', users: 12},
  { id: 6, class: 'B', companyName: 'Japanese Academy', city: 'Tokyo', country: 'Japan', lastName: 'Lee', firstName: 'David', users: 32},
  { id: 7, class: 'A', companyName: 'Chinese Language Center', city: 'Beijing', country: 'China', lastName: 'Garcia', firstName: 'Sophia', users: 25},
  { id: 8, class: 'C', companyName: 'Russian School', city: 'Moscow', country: 'Russia', lastName: 'Martinez', firstName: 'Olivia', users: 18},
  { id: 9, class: 'B', companyName: 'Arabic Institute', city: 'Cairo', country: 'Egypt', lastName: 'Wilson', firstName: 'Daniel', users: 21},
  { id: 10, class: 'A', companyName: 'Korean Language School', city: 'Seoul', country: 'South Korea', lastName: 'Anderson', firstName: 'Emma', users: 30},
  { id: 11, class: 'C', companyName: 'Swedish Language Institute', city: 'Stockholm', country: 'Sweden', lastName: 'Lopez', firstName: 'Mia', users: 22},
  { id: 12, class: 'B', companyName: 'Turkish Language School', city: 'Istanbul', country: 'Turkey', lastName: 'Thomas', firstName: 'Ethan', users: 17},
  { id: 13, class: 'A', companyName: 'Spanish Language Academy', city: 'Madrid', country: 'Spain', lastName: 'Rodriguez', firstName: 'Luis', users: 26},
  { id: 14, class: 'B', companyName: 'French Language School', city: 'Lyon', country: 'France', lastName: 'Gonzalez', firstName: 'Sophie', users: 23},
  { id: 15, class: 'C', companyName: 'German Language Center', city: 'Hamburg', country: 'Germany', lastName: 'Perez', firstName: 'Lucas', users: 16},
  { id: 16, class: 'A', companyName: 'Italian Academy', city: 'Florence', country: 'Italy', lastName: 'Rodriguez', firstName: 'Mia', users: 29},
  { id: 17, class: 'B', companyName: 'Japanese Language Institute', city: 'Osaka', country: 'Japan', lastName: 'Lopez', firstName: 'Aiden', users: 19},
  { id: 18, class: 'C', companyName: 'Chinese School', city: 'Shanghai', country: 'China', lastName: 'Hernandez', firstName: 'Isaac', users: 14},
  { id: 19, class: 'A', companyName: 'Russian Language Center', city: 'St. Petersburg', country: 'Russia', lastName: 'Taylor', firstName: 'Ella', users: 31},
  { id: 20, class: 'B', companyName: 'Arabic Academy', city: 'Dubai', country: 'United Arab Emirates', lastName: 'Gomez', firstName: 'Benjamin', users: 22},
  { id: 21, class: 'C', companyName: 'Korean Language School', city: 'Busan', country: 'South Korea', lastName: 'Martinez', firstName: 'Ava', users: 17},
  { id: 22, class: 'A', companyName: 'Portuguese Institute', city: 'Lisbon', country: 'Portugal', lastName: 'Brown', firstName: 'Ethan', users: 27},
  { id: 23, class: 'B', companyName: 'Dutch Language Institute', city: 'Amsterdam', country: 'Netherlands', lastName: 'Gonzalez', firstName: 'Ava', users: 24},
  { id: 24, class: 'A', companyName: 'Greek Language School', city: 'Athens', country: 'Greece', lastName: 'Hernandez', firstName: 'Alexander', users: 19},
  { id: 25, class: 'C', companyName: 'Swiss Language Center', city: 'Zurich', country: 'Switzerland', lastName: 'Taylor', firstName: 'Sophia', users: 16},
  { id: 26, class: 'A', companyName: 'Polish Academy', city: 'Warsaw', country: 'Poland', lastName: 'Lopez', firstName: 'Lucas', users: 27},
  { id: 27, class: 'B', companyName: 'Turkish Language School', city: 'Istanbul', country: 'Turkey', lastName: 'Perez', firstName: 'Isabella', users: 22},
  { id: 28, class: 'C', companyName: 'Thai Language Institute', city: 'Bangkok', country: 'Thailand', lastName: 'Thomas', firstName: 'Mia', users: 17},
  { id: 29, class: 'A', companyName: 'Vietnamese Language School', city: 'Hanoi', country: 'Vietnam', lastName: 'Gomez', firstName: 'Ethan', users: 31},
  { id: 30, class: 'B', companyName: 'Indonesian Language Center', city: 'Jakarta', country: 'Indonesia', lastName: 'Rodriguez', firstName: 'Benjamin', users: 20},
];

export default function DataTable() {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
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