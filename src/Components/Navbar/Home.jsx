import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
 

  const [data,setData] = useState(
   { Host:"",
    User:"",
    Password:""},
  );
  const [inputData,setInputData] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) =>{
    const {name,value}= e.target
    setData((prev)=>({...prev,[name]:value}))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setInputData([...inputData,data])
    setData({ Host:"",
    User:"",
    Password:""})
    setShow(false)
  }
  const removeData = (index) =>{
    const upDateList = inputData.filter((ele,id)=>{
      return index != id;
    })
    setInputData(upDateList);
  }

  
  return (
    <>
      <div className="container-fluid">
        <div className="main-content">
          <h4>Tent</h4>
          <div className="popup">
          <Button variant="success" onClick={handleShow}>
        Add tent
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className="text center" onSubmit={handleSubmit}>
          <input type="text" value={data.Host} name="Host" placeholder="Host"  className="form-control" onChange={handleChange}/><br></br><br></br>
          <input type="text" value={data.User} name="User" placeholder="User" className="form-control" onChange={handleChange}/><br></br><br></br>
          <input type="text" value={data.Password} name="Password" placeholder="Password" className="form-control" onChange={handleChange} /><br></br><br></br>

          <Button variant="primary" type="submit" className="m-auto" >
            Submit
          </Button>

         </form>

        </Modal.Body>
       
      </Modal>
          </div>
        </div>
        <div className="">
          
          <table>
            <thead>
              <tr>
                <th>Host</th>
                <th>User</th>
                <th>Password</th>
                <th className="d-flex justify-content-end">Action</th>
              </tr>
            </thead>
            <tbody className="dynamic mt-4">
           {inputData.map((item,index) => {
                return(
                  <>
                  <tr key={index}>
                  <td>{item.Host}</td>
                  <td>{item.User}</td>
                  <td>{item.Password}</td>
                  <td className="icons d-flex justify-content-end gap-3">
                  <i className="ri-edit-2-fill"></i> 
                  <i className="ri-delete-bin-6-line" onClick={()=>removeData(index)}></i>
                </td>

                  </tr>
                  </>
                )
              })}
            </tbody>
            </table>
          
          </div>
        
         
          
      </div>
    </>
  );
};

export default Home;
