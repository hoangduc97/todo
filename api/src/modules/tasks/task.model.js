import mongoose from 'mongoose';

const task = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    note: {
        type: String,
    },
    priority: {
        type: Number,
        enum: [0, 1, 2, 3],
    },
    due_date: {
        type: Date,
    },
});

export default mongoose.model('Task', task);
