import { quotes, users } from "./fakedb.js";
import {randomBytes} from "crypto"


//this is resolver for query
const resolvers = {
    Query: {
      users:()=> users,
      user:(_,{id})=>users.find(user=>user.id ==id),
      quotes:()=> quotes,
      iqoute: (_,{by})=>quotes.filter(quotes=>quotes.by ==by),
    },
    User:{
      quotes:(person)=>quotes.filter(quote=>quote.by == person.id)   // type User vitra ko quotes:[Quote] lai mongoo ma populate gareko jastai gari resolve gardai xa
    },
    Mutation:{
        signupUser:(_,{userNew})=>{
            const id = randomBytes(5).toString('hex')   //gives us 10digit
            users.push({
                id,
                ...userNew
            })
            return users.find(user=>user.id == id)
        }
    }
  };


  export default resolvers