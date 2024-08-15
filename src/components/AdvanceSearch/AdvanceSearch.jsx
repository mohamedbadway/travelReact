import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
 import CustomDropdown from '../CustomDropdown/CustomDropdown';
 import '../AdvanceSearch/search.css'
export default function AdvanceSearch() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectedLocation=(value)=>{
console.log(value)
    }
    const selectedGuest=(value)=>{
console.log(value)
    }
  return (
    <>
      <section className='box-search-advance'>
<Container>
    <Row>
        <Col md={12} xs={12}>
        <div className='box-search shadow-sm'>
         <div className='item-search'>
         
<CustomDropdown
label="location"
onSelect={selectedLocation}
options={
    [
     "USA,Turkish",
     "Sydney,Australia",  
     "Melbourne,Australia",
     "Paris,France" 
    ]
} 
 
/>
 
         </div>
         <div className='item-search item-search-2'>
<label className="item-search-label">Check in</label>
<DatePicker
 selected={startDate}
  onChange={(date) => setStartDate(date)}
  selectsStart
  startDate={startDate}
  endDate={endDate}
   
  dateFormat="dd,MMMM,yyyy"
  />
         </div>
         <div className='item-search item-search-2'>
         <label className="item-search-label">Check Out</label>
         <DatePicker
          selected={endDate}
           onChange={(date) => setEndDate(date)} 
           selectsEnd
           startDate={endDate}
           endDate={startDate}
           dateFormat="dd,MMMM,yyyy"
           />
         </div>
         <div className='item-search bd-none'>
         <CustomDropdown
label="Guest"
onSelect={selectedGuest}
options={
    [
      "2 adults, children",
      "2 adults, 1 children",
      "2 adults, 3children",
      
    ]
}
/>
 
         </div>
         <div className='item-search bd-none'>
<Button className='primaryBtn flex-even d-flex justify-content-center'>
<i className="bi bi-search me-2"></i>Search
</Button>
         </div>
        </div>
        </Col>
    </Row>
</Container>
      </section>
    </>
  )
}







