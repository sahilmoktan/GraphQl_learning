import { Schema, model } from 'mongoose';
const ContactSchema = new Schema({
    id: String,
    person: { type: String, required: true },
    contactNumber: { type: Number, required: true },
});
const Contact = model('Contacts', ContactSchema);
export default Contact;
