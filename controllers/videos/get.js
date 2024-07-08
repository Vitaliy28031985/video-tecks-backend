import Video from "../../models/video.js";
const getAll = async (req, res) => { 
     const { _id } = req.user;
     const videos = await Video.find({ owner: _id }); 
     res.status(200).json(videos);
}

export default getAll;