import Video from "../../models/video.js";

const update = async (req, res) => {
   
    const { id } = req.params;
    const { title, description, link } = req.body;
    
    const data = { title, description, link };

    const update = await Video.findByIdAndUpdate( id, data, {new: true});
    res.status(200).json(data);


}

export default update;