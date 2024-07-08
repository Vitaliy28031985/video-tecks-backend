import Video from "../../models/video.js";

const add = async (req, res) => { 
    const { body } = req;
      const { _id } = req.user;
   
    const result = await Video.create({...body, owner: _id});
     res.status(201).json(result);
}

export default add;