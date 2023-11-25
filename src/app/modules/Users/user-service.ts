import { TOrder, TUser } from './user-interface';
import { User } from '../user-model';

// post     api/users
const createUserIntoDb = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

// get    api/users
const getAllUserFromDb = async () => {
  const result = await User.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
  );

  return result;
};

// get    api/users/:userId
const getSingleUserFromDb = async (id: number) => {
  const user = await User.isUserExists(id);
  if (!user) {
    throw new Error('User is not found');
  }
  return user;
};

// put update    api/users/:userId
const updateUserInfoDb = async (id: number, user: TUser) => {
  const existsUser = await User.isUserExists(id);
  if (!existsUser) {
    throw new Error('User is not found');
  }

  const result = await User.findOneAndUpdate({ userId: id }, user, {
    new: true,
  });

  return result;

  // const userData = await User.updateOne({ userId: id }, user);
  // const userInfo = await User.findOne({ userId: id }, { _id: 0, orders: 0 });
  // return { userData, userInfo };
};

// delete     api/users/:userId
const deleteUserFromDb = async (id: number) => {
  const existsUser = await User.isUserExists(id);
  if (!existsUser) {
    throw new Error('User is not found');
  }
  const result = await User.deleteOne({ userId: id });
  return result;
};

// put   api/users/:userId/orders
const addNewProductIntoOrder = async (id: number, product: TOrder) => {
  const existsUser = await User.isUserExists(id);
  if (!existsUser) {
    throw new Error('User is not found');
  }
  const result = await User.updateOne(
    { userId: id },
    { $addToSet: { orders: product } },
  );
  return result;
};

// get   api/users/:userId/orders
const getUserOrdersFromDb = async (id: number) => {
  const existsUser = await User.isUserExists(id);
  if (!existsUser) {
    throw new Error('User is not found');
  }

  const result = await User.findOne({ userId: id }, { orders: 1, _id: 0 });
  return result;
};

// get   api/users/:userId/orders/total-price
const getUserOrderTotalAmount = async (id: number) => {
  const existsUser = await User.isUserExists(id);
  if (!existsUser) {
    throw new Error('User is not found');
  }
  const result = await User.aggregate([
    {
      $match: { userId: id },
    },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        totalPrice: { $sum: '$orders.price' },
      },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ]);

  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUserFromDb,
  getSingleUserFromDb,
  updateUserInfoDb,
  deleteUserFromDb,
  addNewProductIntoOrder,
  getUserOrdersFromDb,
  getUserOrderTotalAmount,
};
