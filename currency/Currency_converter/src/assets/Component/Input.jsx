import React from 'react'

function Index({lable,
amount ,
onchangeamount,
countrylist=[],
onchangecountrylist,


})



{
  return (
    <div>


    
    <lable>{lable}</lable>     
      <input type='text' placeholder='Amount' value={amount}  onChange={(e)=>{onchangeamount && onchangeamount(e.target.value)}} />
      <select
      value={lable}
       onChange={(e)=>{onchangecountrylist && onchangecountrylist(e.target.value)}}>

      {countrylist.map((country)=>{return(<option  >{country}</option>)})}
      </select>


      
    </div>
  )
}

export default Index
