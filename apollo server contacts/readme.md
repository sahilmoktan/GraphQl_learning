# Apollo server with typescript
- npm i @apollo/server graphql mongoose
- npm install --save-dev typescript @types/node
- create src/index.ts
- create tsconfig.json in root dir and code form apollo documentation for ts setup


### package.json
-  "type": "module",
-  "scripts": {
    "compile": "tsc",
    "build": "npm run compile",
    "start": "node ./dis/src/index.js"
  }

--------------------------------------------
- create bookModel
- imp apollo server, mongo connect in index.ts
- define typeDefs Query
- define resolvers for Query
- connect MONGODB
- SERVER IN APOLLO, PORT LISTEN


--------------------------------------------
- npm run build //compiles code
- npm run start 