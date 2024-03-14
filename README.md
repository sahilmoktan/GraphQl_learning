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
Schema collection of query/mutation types that directing toward operation (few like routing)
    - this is the first point where client req is heared and directed towards ope
    - here we need to declare operation type(query or mutation)
    - type query requesting data & sub types deceration
    - mutation requesting for post works also input deceration

resolver works as controllers
    - here all the logics & main function are coded
    - operation directed form schema are handled here
    - query part delivers get fnc works, getting data for borwser/client
    - mutation part does the create/ update/delete fnc

models are common to react model system 
    - declaration of fields for db collections
    }}


now starting client site work 
    same directory 
    npx create-react-app client //for react
    materialize cdn for quick css

created basic ui for our project
npm i react-router-dom@6

after react all pages setup

npm i @apollo/client@3.9.6 graphql@15.7.2

in index.js import apollo/client and wrap <App/> like porvider

created queries.js in graphqlope folder and keep needed req commands
imported that in Home.js


summary of client site
we have used react with apollo server
all the structure are more like same(app.js, index.js components,) but the dfference is
    - apollo client wraps whole app and provides cache storage feature
    - create only routes.js insted of route folder and many painful route files ✌
    - routes.js provides other components as element on very origanize way
    - we create graphQloperation mutation.js and queries.js
    - queries provides the get req works with their specific operation name
    - mutation provides the create, reg, update ... operation work with name
    - graphQl operation are imported in components(home) by useQuery
    - useQuery provides specially { loading, error, data} main data in destructure way
    - then our client component can access them


added 404 page aswell

new before  deployment
npm dotenv
replaced all config.js with .env 

npm i apollo-server-express express
replace apollo-server with apollo-server-express