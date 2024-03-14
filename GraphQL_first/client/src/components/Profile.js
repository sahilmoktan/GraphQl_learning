import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../graphqlOpe/queries";

export default function Profile() {
const {loading,error,data}=useQuery(GET_MY_PROFILE)
console.log(data)

if(loading)return <h2>profile loading</h2>

if(error){
  console.log(error)
}
 if (!data || !data.user) {
    return <h2>No profile data available</h2>;
  }

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
      <h3>Your quotes</h3>
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
