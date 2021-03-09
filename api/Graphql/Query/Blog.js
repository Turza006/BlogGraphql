import {Blog} from '../../Models/Blog'

export const GetAllBlog = async (parent, args, ctx, req)=>{
    const data= await Blog.find({status:'Active'})
    return{
        data,
        msg:'Success',
        code:'Success'
    }
}