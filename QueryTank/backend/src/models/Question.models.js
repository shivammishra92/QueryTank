import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: String,
    body: String,
    tags: [],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: Object,
    commentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }
})

export const Questions = mongoose.model("Questions",questionSchema)