import { Schema, model } from 'mongoose';
import { Order } from './Users/user-interface';

// const orderSchema = new Schema();

const userSchema = new Schema<Order>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: String, enum: ['active', 'inactive'] },
  hobbies: [{ type: String }],
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  orders: [
    {
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

//   userId: { type: Number, required: true, unique: true },
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   fullName: {
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//   },
//   age: { type: Number, required: true },
//   email: { type: String, required: true, unique: true },
//   isActive: { type: Boolean, required: true },
//   hobbies: [{ type: String }],
//   address: {
//     street: { type: String, required: true },
//     city: { type: String, required: true },
//     country: { type: String, required: true },
//   },
//   orders: [orderSchema],
// });

const User = model<Order>('User', userSchema);

export default User;
