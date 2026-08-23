import jwt from 'jsonwebtoken';
export async function login(req,res){
 const {email,password}=req.body;
 if(!email||!password) return res.status(400).json({message:'Email and password are required'});
 const validEmail=email.toLowerCase()===process.env.ADMIN_EMAIL?.toLowerCase();
 const validPassword=process.env.ADMIN_PASSWORD ? password===process.env.ADMIN_PASSWORD : false;
 if(!validEmail||!validPassword) return res.status(401).json({message:'Invalid credentials'});
 const token=jwt.sign({email,role:'admin'},process.env.JWT_SECRET,{expiresIn:'8h'});
 res.json({token,admin:{email,role:'admin'}});
}
