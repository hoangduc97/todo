import mongoose from 'mongoose';

const list = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    tasks: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Task'
        }
    ]
});

export default mongoose.model('List', list);
