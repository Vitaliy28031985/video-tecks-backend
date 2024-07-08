import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const videoSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
     owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      }
}, {versionKey: false, timestamps: true});

const Video = model("videos", videoSchema);

export default Video;