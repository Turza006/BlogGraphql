import {Admin} from '../../Models/Admin'

export const Signup = async (parent, args, ctx, req)=>{
    const {payload} = args
    const newAdmin = new Admin(payload)
    await newAdmin.save()
    return{
        msg:"AdminCreated",
        code:'Created',
    }
}
export  const login = async (parent,args,ctx,req)=>{
    const {email,password} = args
    const data = await Admin.findOne({email:email})
    if(!data){
        return{
            msg:'Email not Exist',
            code:"Error"

        }
    }else {
        const data2 = await Admin.findOne({email:email,password:password})
        if (!data2){
            return {
                msg:'Password Mismatch',
                code:"Error"

            }
        }else {
            return {
                msg:'Login Success',
                code:'Success'
            }
        }

    }
}