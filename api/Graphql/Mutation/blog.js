import {Blog} from '../../Models/Blog'

export const CreateBlog = async (parent, args, ctx, req)=>{
    const {payload} = args
    const newBlog = new Blog(payload)
    await newBlog.save()
    return{
        msg:'Blog Created',
        code:'Success'
    }

}


export const EditBlog = async (parent, args, ctx, req)=>{
    const {id,payload} = args
    await Blog.findOneAndUpdate({_id:id},{$set:payload})
    return {
        msg:'Edited',
        code:'Success'
    }
}