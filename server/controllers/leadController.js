import Lead from '../models/Lead.js';
export async function listLeads(req,res){
 const {search,status}=req.query; const q={};
 if(status&&['new','contacted','converted'].includes(status)) q.status=status;
 if(search) q.$or=[{name:new RegExp(search,'i')},{email:new RegExp(search,'i')},{source:new RegExp(search,'i')}];
 res.json(await Lead.find(q).sort({createdAt:-1}));
}
export async function stats(req,res){
 const [total,newCount,contacted,converted]=await Promise.all([Lead.countDocuments(),Lead.countDocuments({status:'new'}),Lead.countDocuments({status:'contacted'}),Lead.countDocuments({status:'converted'})]);
 res.json({total,new:newCount,contacted,converted});
}
export async function getLead(req,res){const lead=await Lead.findById(req.params.id);if(!lead)return res.status(404).json({message:'Lead not found'});res.json(lead);}
export async function createLead(req,res){try{const lead=await Lead.create(req.body);res.status(201).json(lead);}catch(e){res.status(400).json({message:e.message});}}
export async function updateLead(req,res){try{const lead=await Lead.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});if(!lead)return res.status(404).json({message:'Lead not found'});res.json(lead);}catch(e){res.status(400).json({message:e.message});}}
export async function deleteLead(req,res){const lead=await Lead.findByIdAndDelete(req.params.id);if(!lead)return res.status(404).json({message:'Lead not found'});res.json({message:'Lead deleted'});}
export async function addNote(req,res){const lead=await Lead.findById(req.params.id);if(!lead)return res.status(404).json({message:'Lead not found'});if(!req.body.text?.trim())return res.status(400).json({message:'Note text is required'});lead.notes.push({text:req.body.text.trim()});await lead.save();res.status(201).json(lead);}
