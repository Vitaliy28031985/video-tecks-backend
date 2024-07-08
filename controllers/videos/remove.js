import Video from "../../models/video.js";

const remove = async (req, res) => { 
    const { id } = req.params;
     const { _id } = req.user;
    const remove = await Video.findOneAndDelete({ owner: _id, _id: id });
     res.status(200).json({massage: "Відео видалено!"});

}

export default remove;