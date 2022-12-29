import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class ServiceDetails extends Component {
  // constructor(props){
  //   super(props);

  //   this.state={
  //     //post:{},
  //     service:{}
  //   };
  // }

  // componentDidMount(){
  //   const id = this.props.match.params.id;
  //   //check service or post
  //   axios.get(`/service/${id}`).then((res)=>{
  //     if(res.data.success){
  //       this.setState({


  //         service:res.data.service
  //       });

  //         console.log(this.state.service);
  //     }
  //   });
  // }
  

  // render() {
  //   const {type,name,price,discription}=this.state.service;
  //   return (
  //     <div className = "container" >
  //     <NavBar/>
  //   <div style={{marginTop:'20px'}}>
  //     <h4>{type}</h4>

  // <dl class="row">
  // <dt class="col-sm-3">Type</dt>
  // <dd class="col-sm-9">{type}</dd>

  // <dt class="col-sm-3">Name</dt>
  // <dd class="col-sm-9">{name}</dd>

  // <dt class="col-sm-3">Price</dt>
  // <dd class="col-sm-9">{price}</dd>

  // <dt class="col-sm-3">Description</dt>
  // <dd class="col-sm-9">{discription}</dd>

  // </dl>

  //   </div>
  //   </div>

  //   )
    
  // }


  


  constructor(props) {
    super(props);

    this.state={
        post:{}                   // post = queRes
    };
}

componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/Res/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                post:res.data.post            //
            });

            console.log(this.state.post);     //
            
        }
    });
}




render() {

    const {Name,ID,Phone_No} = this.state.post;

    return (
        <div className = "container" >
        <NavBar/>
        <div style={{marginTop:'20px'}}>
    
        <h4>Order Name: {Name}</h4>
        {/* <h4>{ID}</h4> */}
        <hr/>

        <dl className="row">
            <dt className="col-sm-3">Goods </dt>
            <dd className="col-sm-9">{Name}</dd>

            <dt className="col-sm-3">Quantity</dt>
            <dd className="col-sm-9">{ID}</dd>

            <dt className="col-sm-3">Cost</dt>
            <dd className="col-sm-9">{Phone_No}</dd>

            {/* <dt className="col-sm-3">Requested Date</dt>
            <dd className="col-sm-9">{Check_In}</dd>

            <dt className="col-sm-3">Required Date</dt>
            <dd className="col-sm-9">{Check_Out}</dd>

            <dt className="col-sm-3">Number Of Suppliers</dt>
            <dd className="col-sm-9">{No_Of_Rooms}</dd> */}
        </dl>
        </div>

        <div className='container2'>
            <h1 style={{color: "green"}}>Successfully Approved the Payment</h1>

            <button className="btn btn-success"  style={{marginLeft:"13px",borderRadius:'35px',marginTop:'20px'}}><a href="/Restaurantadd" style={{textDecoration:'none',color:'white',fontFamily: 'monospace'}}>Make Payment</a></button>

        </div>

        </div>
    )
}
}
