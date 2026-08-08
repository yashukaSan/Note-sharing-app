import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUserMethods{
    comparePassword(password: string): Promise<boolean>;
}

export interface IUser extends Document {
    Uname: string;
    Uemail: string;
    username: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser, any, IUserMethods>({
    Uname: {
        type: String,
        required: true
    },
    Uemail: {
        type: String,
        lowercase: true,
        unique: true,
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        minLength: 4,
        maxLength: 20
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    }
}, { timestamps: true });

UserSchema.pre<IUser>('save', async function() {
    if (!this.isModified('password')) return;
    try {
        this.password = await bcrypt.hash(this.password!, 12);
    } catch (err: any) {
        throw err;
    }
});

UserSchema.methods.comparePassword = async function(password: string) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (err) {
        throw err;
    }
};

export const User = model<IUser>('User', UserSchema);