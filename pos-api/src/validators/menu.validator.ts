import { body } from "express-validator";

export const createMenuValidator = [
    body("name").exists().withMessage("Menu name is required").isString().isLength({
        min: 6, max: 50
    }),

    body("description").exists().withMessage("Menu description is required").isString().isLength({
        min: 10, max: 200
    }),

    body("price").exists().withMessage("Menu price is required").toInt(),

    body("isAvailable").exists().withMessage("Menu Available is required").toBoolean()
];