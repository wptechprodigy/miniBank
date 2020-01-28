import { model, Document, Schema } from 'mongoose';

interface UserSchema extends Document {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isDeleted: boolean;
  _accounts?: object[];
}

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, index: true },
    mobileNumber: String,
    password: String,
    deletedAt: { type: Date, default: null },
    isDeleted: Boolean,
    _accounts: [{ type: Schema.Types.ObjectId, ref: 'Accounts' }],
  },
  {
    timestamps: true,
  },
);

export default model<UserSchema>('Users', userSchema);
