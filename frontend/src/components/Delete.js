import {React,useEffect,useState} from 'react'
import { Box ,Button,Typography} from '@mui/material'

import AxiosInstance from './Axios'

import {useNavigate,useParams} from 'react-router-dom'

const Delete = () => {

  const MyParam=useParams();
  const MyID=MyParam.id;
  const [myData,setMydata] =useState();
  const [loading,setloading] =useState(true);
  const GetData = () => {
    AxiosInstance.get(`project/${MyID}/`).then((res)=> {
      setMydata(res.data)
      setloading(false)
    })

  }
 
  useEffect(() =>{
     GetData();
  },[])
 
  useEffect(() =>{
     GetData()
  },[])
  const navigate = useNavigate();

  const submission = (data) => {
  
   AxiosInstance.delete(`project/${MyID}/`,{
      

  })
  .then((res)=> {
    navigate('/');
  })
  
  
    
  }
  return (
   

    <div>
       { loading ? <p>Loading Data...</p> :
       <div>
        <Box sx={{display:'flex',width:'100%',backgroundColor:'#00003f',marginBottom:'10px'}}>
          <Typography sx={{marginLeft:'20px',color:'#fff'}}>
            Delete Project : {myData.name}
          </Typography>
       </Box>

     <Box sx={{display:'flex',width:'100%',boxShadow:3,padding:4, flexDirection:'column'}}>
        <Box sx={{display:'flex',justifyContent:'start',marginBottom:'40px'}}>
              Are You Sure That You Want to Delete this Project: {myData.name}??
        </Box>
        <Box sx={{width:"30%"}}>
            <Button variant="contained" onClick={submission} sx={{width:'100%'}}>
              Delete The Project
            </Button>
        </Box>
        
      </Box>
      </div>
}
    </div>
    
  )
}

export default Delete
