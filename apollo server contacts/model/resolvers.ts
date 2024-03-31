import Contact from "./contactModel.js"


export const resolvers={
    Query:{
        async getContact(_, {ID}){
            return await Contact.findById(ID);
        },
        async getContacts(_, {limit}){
            return await Contact.find().limit(limit)
        }
    },
    Mutation:{
        async createContact(_, { contactInput }) {
            // Destructure the fields from contactInput
            const { person, contactNumber } = contactInput;
            
            // Check if the fields are valid (optional, but recommended)
            if (!person || !contactNumber) {
                throw new Error("Person and contactNumber fields are required.");
            }
            
            // Assuming `Contact` is your Mongoose model
            const res = await new Contact({ person, contactNumber }).save();
            
            // Return a response indicating the operation was successful
            return res._id
        },
        async updateContact(_, { ID, contactInput: { person, contactNumber } }) {
            try {
                const updatedContact = await Contact.findByIdAndUpdate(ID, { person, contactNumber }, { new: true });
        
                if (!updatedContact) {
                    throw new Error("Contact not found");
                }
        
                return "Contact details updated";
            } catch (error) {
                console.error("Error updating contact:", error);
                throw new Error("Failed to update contact details");
            }
        },
        async deleteContact(_, {ID}){
            await Contact.findByIdAndDelete({_id:ID})
            return "Contact deleted successfully";
        }
    }
}