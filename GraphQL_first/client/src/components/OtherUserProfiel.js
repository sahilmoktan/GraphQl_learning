import React from "react";
import { useQuery } from "@apollo/client";
import { GET_User_By_ID } from "../graphqlOpe/queries";
import { useParams } from "react-router-dom";


export default function OtherUserProfile() {
  const {userid}=useParams()
  // console.log(userid)
  
const {loading,error,data}=useQuery(GET_User_By_ID,{
  variables:{
    userid:userid  //first ko graphql ko userid second ko hamro clientko
  }
})


if(loading)return <h2>profile loading</h2>

if(error){
  console.log(error)
}
//  if (!data || !data.user) {
//     return <h2>No profile data available</h2>;
//   } //this code fails apollo server's :you must login 

  return (
    <div className="container my-container">
      <div className="center-align">
        <img
          className="circle"
          style={{ border: "2px solid", marginTop: "10px" }}
          src={`https://robohash.org/${data.user.firstName}.png?size=200x200`}
          alt="pic"
        />
        <h5>{data.user.firstName} {data.user.lastname}</h5>
        <h6>Email - {data.user.email}</h6>
      </div>
      <h3>Your Quotes</h3>
      {
        data.user.quotes.map(quo=>{
          return(
            <blockquote>
              <h6>{quo.name}</h6>
            </blockquote>
          )
        })
      }
      
      {/* <blockquote>
        <h6>am learning GraphQl</h6>
      </blockquote>
      <blockquote>
        <h6>will master GraphQl</h6>
      </blockquote> */}
    </div>
  );
}
