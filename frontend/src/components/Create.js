import React from 'react'
import{Box, Button, Typography} from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MySelectField from './forms/MySelectField'
import MyMultilineField from './forms/MyMultilineField'
import MyTextfield from './forms/MyTextfield'
import { useForm } from 'react-hook-form'

const Create = () => {
  const {handleSubmit, reset,setValue,control} = useForm()
  const submission = (data) => console.log(data)
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

export default Create
