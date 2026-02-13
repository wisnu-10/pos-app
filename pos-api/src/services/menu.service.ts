import { Menu } from '../../generated/prisma/client';
import { prisma } from '../configs/prisma-client.config';
import { cloudinaryUpload } from '../helpers/cloudinary.helper';

export const menuService = {
  async getAll(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const menus = await prisma.menu.findMany({
      skip: offset,
      take: limit,
      include: {
        menuImages: true
      }
    });

    const totalMenus = await prisma.menu.count();

    const totalPages = Math.ceil(totalMenus / limit);

    return {
      menus,
      totalMenus,
      totalPages
    };
  },

  async getById(id: string) {
    return await prisma.menu.findFirst({
      where: {
        id,
      },
    });
  },

  async create(files: Express.Multer.File[], { name, price, description, isAvailable }: Pick<Menu, "name" | "price" | "description" | "isAvailable">) {
    await prisma.$transaction(async (tx) => {
      const createdMenu = await tx.menu.create({
        data: {
          name,
          price,
          description,
          isAvailable
        }
      });

      /*
      if using disk storage
      const fileToCreate = files?.map((file: Express.Multer.File) => {
        return { imageUrl: file?.filename, menuId: createdMenu?.id };
      });
  
      await prisma?.menuImage?.createMany({
        data: fileToCreate
      }); */

      const cloudinaryUploaded = files.map(async (file: Express.Multer.File) => {
        const { secureUrl } = await cloudinaryUpload(file?.buffer);
        return { imageUrl: secureUrl, menuId: createdMenu?.id };
      });
      const filesToSave = await Promise.all(cloudinaryUploaded);

      await tx?.menuImage?.createMany({
        data: filesToSave
      });
    });

  }
};
