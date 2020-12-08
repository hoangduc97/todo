import mongoose from 'mongoose';

const task = new mongoose.Schema({
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
    list: {
        type: mongoose.Types.ObjectId,
        ref: 'List',
    },
});

export default mongoose.model('Task', task);
