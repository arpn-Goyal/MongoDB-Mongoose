import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true }
}, { timestamps: true })

// Indexes 
authorSchema.index({ name: 1 });
// Middelwares
authorSchema.pre('save', (next) => {
    console.log(`Before Saving`);
    next();
})
authorSchema.post('save', (next) => {
    console.log(`After Saving`);
})

// Virtuals
authorSchema.virtual('fullDetails').get(function () {
    return `${this.name} ${this.email}`;
})

const Author = mongoose.model('Author', authorSchema);

export default Author;


