import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
    },
    image: {
        type: String
    }
})

const User = models.User || model("User", UserSchema);

// The 'models' object is provided by the mongoose library and stored all registered models.
// If model named "User" exists in the models object, it assigns that existing model to User variable.
// else model is called is create a new Model User

export default User;