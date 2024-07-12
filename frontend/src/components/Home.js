import {React,useEffect} from 'react'
import AxiosInstance from './Axios'
import { useMemo ,useState} from 'react';
import { Box, IconButton } from '@mui/material';
import {
  MaterialReactTable,
  
} from 'material-react-table';
import Dayjs from 'dayjs';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Home = () => {

  const [myData,setMydata] =useState();
  const [loading,setloading] =useState(true);
  const GetData = () => {
    AxiosInstance.get(`project/`).then((res)=> {
      setMydata(res.data)
      setloading(false)
    })

  }
 
  useEffect(() =>{
     GetData();
  },[])
  
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Name',
        size: 150,
      },
      {
        accessorFn: (row)=>Dayjs(row.start_date).format('DD-MM-YYYY'),
      
        header: 'Start Date',
        size: 150,
      },
      {
        accessorFn: (row)=>Dayjs(row.end_date).format('DD-MM-YYYY'), //normal accessorKey
        header: 'End Date',
        size: 200,
      },
      {
        accessorKey: 'comments',
        header: 'Comments',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
      },
    ],
    [],
  );
  
  
  return (
    <div>
    { loading ? <p>Loading Data...</p> : <MaterialReactTable
    
    columns={columns} data={myData}
    layoutMode="grid"
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 180, //if using layoutMode that is not 'semantic', the columns will not auto-size, so you need to set the size manually
          grow: false,
        },
      }}
      enableRowActions
      renderRowActions={({row}) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
         
        <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    
    />
    }
    </div>
  )
}


export default Home
