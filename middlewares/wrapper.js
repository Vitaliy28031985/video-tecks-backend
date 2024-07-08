const wrapper = controller => {
    const func = async(req, res, next) => {
        try {
            await controller(req, res, next)
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
 
    return func;
   }

   export default wrapper;