import { quotes, users } from "./fakedb.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const User = mongoose.model("User");
const Quote = mongoose.model("Quote");

//this is resolver for query form typeDefs
//now changes for localdb processing to mongodb database
const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { _id }) => await User.findOne({_id}), //users.find((user) => user._id == _id),
    quotes: async () => Quote.find({}).populate("by","_id firstName"), // by lai _id ra name le fraction 
    iqoute: async (_, { by }) => await Quote.find({by}) //quotes.filter((quotes) => quotes.by == by),
  },
  User: {
    quotes: async (person) => await Quote.find({by:person._id}) //quotes.filter((quote) => quote.by == person._id), // type User vitra ko quotes:[Quote] lai mongoo ma populate gareko jastai gari resolve gardai xa
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
    updateUser: async (_, { _id, input }) => {
      // to update the user in the database
      const updatedUser = await User.findByIdAndUpdate(_id, input, { new: true });
      return updatedUser;
    },
   
  },
};

export default resolvers;
