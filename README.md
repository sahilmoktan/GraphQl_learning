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