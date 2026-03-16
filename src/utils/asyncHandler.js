// by using promises / promise.resolve /promise.response
const asyncHandler = (reqHandler) => {
    (req,res,next)=> {
        Promise.resolve(reqHandler(req,res,next))
        .catch((err)=> next(err))
    }
}
export default asyncHandler;



// by using Sync await function...

// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await(fn(req,res,next))
//     } catch (error) {
//         res.status(error.code || 500).json ({
//             success: false,
//             message :error.message
//         })
        
//     }
// }