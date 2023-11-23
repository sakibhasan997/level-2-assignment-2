import User from '../user-model';
import { Order } from './user-interface';

const createUser = async (userData: Order): Promise<Order> => {
  const result = await User.create(userData);
  return result;
};

const getAllUsers = async (): Promise<Order[]> => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (userId: string): Promise<Order | null> => {
  const result = await User.findById(userId);
  return result;
};

const updateUser = async (
  id: string,
  userData: Order,
): Promise<Order | null> => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteUser = async (id: string): Promise<Order | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
