const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']

    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true, //validation: no duplicate emails
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlenght: [6, 'Password must be at least 6 characters'] // Validation
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'manager'], // RBAC Roles
        default: 'user'
    }
})

userSchema.pre('save', async function() {
    // If password is not modified, skip hashing
        if (!this.isModified('password')) return;

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
