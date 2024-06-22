import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions"
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    user: Object,
})

export const Comments = mongoose.model("Comments",commentSchema)