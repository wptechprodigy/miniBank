import { model, Document, Schema } from 'mongoose';

interface AccountsSchema extends Document {
  accountName: string;
  accountNumber: string;
  accountBalance: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  isDeleted: boolean;
  _user: object;
  _accountTransactions: object[];
}

const accountsSchema = new Schema(
  {
    accountName: String,
    accountNumber: { type: String, unique: true },
    accountBalance: Number,
    isDeleted: Boolean,
    deletedAt: { type: Date, default: null },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
    _accountTransactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Transactions',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default model<AccountsSchema>('Accounts', accountsSchema);
