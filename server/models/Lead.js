import mongoose from 'mongoose';
const noteSchema=new mongoose.Schema({text:{type:String,required:true,trim:true},createdAt:{type:Date,default:Date.now}},{_id:true});
const leadSchema=new mongoose.Schema({
 name:{type:String,required:true,trim:true,maxlength:120},
 email:{type:String,required:true,trim:true,lowercase:true,maxlength:180},
 phone:{type:String,trim:true,maxlength:30},
 source:{type:String,default:'Website',trim:true,maxlength:80},
 status:{type:String,enum:['new','contacted','converted'],default:'new'},
 notes:[noteSchema],
 followUpAt:{type:Date,default:null}
},{timestamps:true});
export default mongoose.model('Lead',leadSchema);
