import {React,useEffect} from 'react'
import AxiosInstance from './Axios'
import { useMemo ,useState} from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

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
        accessorKey: 'start_date',
        header: 'Start Date',
        size: 150,
      },
      {
        accessorKey: 'end_date', //normal accessorKey
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
    { loading ? <p>Loading Data...</p> : <MaterialReactTable columns={columns} data={myData}/>
    }
    </div>
  )
}


export default Home
