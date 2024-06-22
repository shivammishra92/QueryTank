import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions"
    },
    answer: String,
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

export const Answers = mongoose.model("Answers",answerSchema)