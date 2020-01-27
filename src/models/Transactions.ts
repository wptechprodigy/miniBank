import { model, Document, Schema } from 'mongoose';

interface TransactionSchema extends Document {
  transactionAmount: number;
  previousBalance: number;
  currentBalance: number;
  createdAt: string;
  transactionType: string;
  _fromAccount: object;
  _toAccount: object;
  _user: object;
}

const transactionSchema = new Schema(
  {
    transactionAmount: Number,
    previousBalance: Number,
    currentBalance: Number,
    transactionType: {
      type: String,
      enum: ['CREDIT', 'DEBIT'],
      default: null,
    },
    _fromAccount: { type: Schema.Types.ObjectId, ref: 'Accounts' },
    _toAccount: { type: Schema.Types.ObjectId, ref: 'Accounts' },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  { timestamps: true },
);

export default model<TransactionSchema>('Transactions', transactionSchema);
