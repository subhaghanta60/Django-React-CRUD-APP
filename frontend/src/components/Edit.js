import {React,useEffect,useState} from 'react'
import{Box, Button, Typography} from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MySelectField from './forms/MySelectField'
import MyMultilineField from './forms/MyMultilineField'
import MyTextfield from './forms/MyTextfield'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import {useNavigate,useParams} from 'react-router-dom'

const Edit = () => {

  const MyParam=useParams();
  const MyID=MyParam.id;
  const GetData = () => {
    AxiosInstance.get(`project/${MyID}`).then((res)=> {
      
      setValue('name',res.data.name)
      setValue('start_date',Dayjs(res.data.start_date))
      setValue('end_date',Dayjs(res.data.end_date))
      setValue('comments',res.data.comments)
      setValue('status',res.data.status)

      
    })

  }
 
  useEffect(() =>{
     GetData()
  },[])
  const navigate = useNavigate();
  const defaultValues = {
    name:'',
    comments:'',
    status:'',
    start_date:null,
    end_date:null,
  }

  const {handleSubmit, setValue, control} = useForm({defaultValues:defaultValues})

  const submission = (data) => {
    const startDate =Dayjs(data.start_date['$d']).format("YYYY-MM-DD")
    const endDate =Dayjs(data.end_date['$d']).format("YYYY-MM-DD")
    console.log(startDate);
   AxiosInstance.put(`project/${MyID}/`,{
      name:data.name,
      status:data.status,
      comments:data.comments,
      start_date:startDate,
      end_date:endDate,

  })
  .then((res)=> {
    navigate('/');
  })
  
  
    
  }
  return (
    <div>
    <form  onSubmit={handleSubmit(submission)}>
   
     <Box sx={{display:'flex',width:'100%',backgroundColor:'#00003f',marginBottom:'10px'}}>
      <Typography sx={{marginLeft:'20px',color:'#fff'}}>
        Create Record
      </Typography>
     </Box>

     <Box sx={{display:'flex',width:'100%',boxShadow:3,padding:4, flexDirection:'column'}}>

        <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:'40px'}}>
          <MyTextfield
            label="Name"
            name="name"
            control={control}
            placeholder="Provide A Project Name"
            width={'30%'}
          />
          <MyDatePickerField
           label="Start Date"
           name="start_date"
           control={control}
           placeholder="Enter Project start Date"
           width={'30%'}
          />
          <MyDatePickerField
           label="End Date"
           name="end_date"
           control={control}
           placeholder="Enter Project start Date"
           width={'30%'}
          />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:'40px'}}>
          <MyMultilineField
            label="Comments"
            name="comments"
            control={control}
            placeholder="Provide A Project Name"
            width={'30%'}
          />
          <MySelectField
           label="Status"
           name="status"
           control={control}
           width={'30%'}
          />
       
        <Box sx={{width:"30%"}}>
            <Button variant="contained" type="submit" sx={{width:'100%'}}>
              Submit
            </Button>
            {/* <Button variant="contained" type="reset" sx={{width:'25%'}}>
              Reset
            </Button> */}
        </Box>
     </Box>
    </Box>
  </form>
    </div>
  )
}

export default Edit
