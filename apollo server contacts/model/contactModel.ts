import {Schema, model} from 'mongoose'

//like objectType for schema
interface IContact {
    id?:string,
    person:string,
    contactNumber:number,
}

const ContactSchema = new Schema<IContact>({
    id:String,
    person:{type:String, required: true},
    contactNumber:{type:Number, required: true},
})

const Contact = model<IContact>('Contacts',ContactSchema)

export default Contact;