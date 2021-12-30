import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    displayName: String,
    email: String,
    password: String,
    pronouns: [String],
    isAdmin: Boolean,
    isModerator: Boolean,
});

export const User = mongoose.model("user", UserSchema);