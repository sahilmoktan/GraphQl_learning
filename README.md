getting srart with graphiQl npm inti --yes

added type & index.js to server.js in package.json

npm i 
    - graphql@15.7.2    // using specific verson so no conflict between me & tutor
    - apollo-server@3.5.0  // using apollo server
    - apollo-server-core@3.5.0  // using for playground


## first apollo server with playground plugin view
![Greeting](https://github.com/sahilmoktan/GraphQl_learning/assets/103031235/fd9f54b2-df13-4e8b-8ed1-cb32ea5e101b)


fakedb.js created so we can play with graphql data

Schema/decleration of type of Query is handled by resolver //extra details written on notebook

In resolver, Query are handeling (type query of typeDefs) & User: part is resolving quote:[Quote] like populating in Mongogdb // extra on notebook

seperation of reslover

mongoos: Atlas cluster create 
config ma connection string rakhnu

npm i mongoose bcryptjs jsonwebtoken

created models for user & quotes
should import model and resolver after the connection of mongoose

self task 1 update user
    first declered updateUser Mutation in schema
    then took UpdateUserInput as input for fields
    in resolver of Mutation: updateUser function to update user
        here _id and input parameters are going, 
        User.findByIdAndUpdate replaces input fields with exsisting fields
        stored in const updateduser as well return us

self task 2 delete user

summary:{{
Schema works as end point directing toward operation
    - here we need to declare operation type(query/mutation)
    - type query for getting data for borwser/client
    - mutation about to be fired, what to take inputs

resolver works as controllers
    - here all the logics & main function are coded
    - operation directed form schema are handled here
    - query part delivers get fnc works
    - mutation part does the create/ update/delete fnc

models are common to react model system 
    - declaration of fields
    }}