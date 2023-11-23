import { Request, Response } from 'express';
import { userServices } from './user-service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body.user;
    const result = await userServices.createUser(userData);

    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'fail',
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers();
    res.status(200).json({
      status: 'success',
      message: 'User fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'Something went wrong',
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await userServices.getSingleUser(userId);
    res.status(200).json({
      status: 'success',
      message: 'Single User fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const id = req.params.id;
    const result = await userServices.updateUser(id, userData);
    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await userServices.deleteUser(id);
    res.status(200).json({
      status: 'success',
      message: 'User deleted successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
