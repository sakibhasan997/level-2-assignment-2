import { Request, Response } from 'express';
import { UserServices } from './user-service';
import userValidation, { orderValidationSchema } from './user-validation';

// post    api/users
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const parsedUserData = userValidation.parse(userData);

    const result = await UserServices.createUserIntoDb(parsedUserData);
    res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: JSON.parse(error.message)[0].message,
      error: {
        code: 404,
        description: JSON.parse(error.message)[0].message,
      },
    });
  }
};

// get   api/users
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDb();
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

// get   api/users/:userId
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params?.userId;
    const result = await UserServices.getSingleUserFromDb(parseFloat(id));

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    }

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

// put  api/users/:userId
const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params?.userId;
    const userData = req.body;

    // const parsedUserData = userValidation.parse(userData);
    const result = await UserServices.updateUserInfoDb(
      parseFloat(id),
      userData,
    );
    if (!result) {
      res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      });
    }

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: JSON.parse(error.message)[0].message,
      error: {
        code: 404,
        description: JSON.parse(error.message)[0].message,
      },
    });
  }
};

// delete   api/users/:userId
const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params?.userId;
    const result = await UserServices.deleteUserFromDb(parseFloat(id));

    if (result.deletedCount === 1) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    }

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

// put   api/users/:userId/orders
const addNewProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params?.userId;
    const product = req.body;
    const parsedOrderData = orderValidationSchema.parse(product);
    const result = await UserServices.addNewProductIntoOrder(
      parseFloat(id),
      parsedOrderData,
    );

    if (result.acknowledged === true) {
      res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: null,
      });
    }

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: JSON.parse(error.message)[0].message,
      error: {
        code: 404,
        description: JSON.parse(error.message)[0].message,
      },
    });
  }
};

// get  api/users/:userId/orders
const getUserOrders = async (req: Request, res: Response) => {
  try {
    const id = req.params?.userId;
    const result = await UserServices.getUserOrdersFromDb(parseFloat(id));

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

// get    api/users/:userId/orders/total-price
const getUserOrdersTotal = async (req: Request, res: Response) => {
  try {
    const id = req.params?.userId;
    const result = await UserServices.getUserOrderTotalAmount(parseFloat(id));
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });

    // eslint-disable-next-line
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addNewProduct,
  getUserOrders,
  getUserOrdersTotal,
};
