import { quotes, users } from "./fakedb.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

//this is resolver for query
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { _id }) => users.find((user) => user._id == _id),
    quotes: () => quotes,
    iqoute: (_, { by }) => quotes.filter((quotes) => quotes.by == by),
  },
  User: {
    quotes: (person) => quotes.filter((quote) => quote.by == person._id), // type User vitra ko quotes:[Quote] lai mongoo ma populate gareko jastai gari resolve gardai xa
  },
  Mutation: {
    signupUser: async (_, { userNew }) => {
      //regestering user
      const existingUser = await User.findOne({ email: userNew.email });
      if (existingUser) {
        throw new Error("User already Exists");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);
      const newUser = new User({
        ...userNew,
        password: hashedPassword,
      });
      return await newUser.save();
    },
    signinUser: async (_, { userSignin }) => {
      //loging in user
      const user = await User.findOne({ email: userSignin.email });
      if (!user) {
        throw new Error("user doesn't Exsist");
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!doMatch) {
        throw new Error("Invilad email or password");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token };
    },
    createQuote:async (_, { name }, { userId }) => {
      //should code where can createQuote only if authorized
      //is procted resource, middleware
      // so before mutation/resolver hit this function we create context for verify
      if (!userId) throw new Error("you must login first");
      const newQuote = new Quote({
        name,
        by:userId,
      });
      await newQuote.save()
      return "Quote savedsuccessfully"
    },
   
  },
};

export default resolvers;
