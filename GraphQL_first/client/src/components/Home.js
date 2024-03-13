import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_ALL_QUOTES } from '../graphqlOpe/queries'

export default function Home() {
    const { loading, error, data} = useQuery(GET_ALL_QUOTES)
    console.log(data)

    if(loading) return <h1>Loading</h1>
   if(error){
       console.log(error.message)
   }
   if(data.quotes.length === 0){
    return  <h2>No Quotes available</h2>
   }
    return (
        <div className="container">
           {
                data.quotes.map(quote=>{
                    return(
                   <blockquote key={quote._id}>
                        <h6>{quote.name}</h6>
                        {/* <p className="right-align">~{quote.by.firstName}</p> */}
                        {quote.by && quote.by.firstName && (
            <p className="right-align">~{quote.by.firstName}</p>  // faced here error firstName not found, later found that i have deleted user so this loop couldn't find user's firstName, Now this code tackle error even if user is not avaliable quote is published 
          )} 
                    </blockquote>
                    )
                })
            }
           
            {/* <blockquote>
                <h6>Learning GraphQl is fun</h6>
                <p className="right-align">~sahil</p>
            </blockquote>
            <blockquote>
                <h6>Soon will get master in GraphQl</h6>
                <p className="right-align">~sahil</p>
            </blockquote> */}
        </div>
    )
}