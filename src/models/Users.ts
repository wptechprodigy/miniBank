import { model, Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserSchema extends Document {
  firstName: string;
  lastName: string;
  username: string;
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
    username: String,
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

// encrypt password before save
userSchema.pre<UserSchema>('save', function(next) {
  const user = this;
  if (user.isModified('password')) {
    // don't rehash if it's an old user
    user.password = bcrypt.hashSync(user.password, 12);

    next();
  }
});

export default model<UserSchema>('Users', userSchema);
