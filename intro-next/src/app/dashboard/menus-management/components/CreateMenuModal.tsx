"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { HiX } from "react-icons/hi";

interface CreateMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateMenuModal({
  isOpen,
  onClose,
}: CreateMenuModalProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      price: "",
      stock: "",
      imageUrl: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product name is required"),
      category: Yup.string().required("Category is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Must be positive"),
      imageUrl: Yup.string()
        .url("Must be a valid URL")
        .required("Image URL is required"),
      stock: Yup.number()
        .required("Stock is required")
        .integer("Must be integer")
        .min(0, "Cannot be negative"),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      // TODO: Call API to create menu
      alert(JSON.stringify(values, null, 2));
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 transition-opacity">
      <div className="w-full max-w-lg transform rounded-2xl bg-white shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Create New Menu
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all text-black bg-white ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
                placeholder="e.g. Caramel Macchiato"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="mt-1 text-xs text-red-500">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            {/* Category */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Category
              </label>
              <div className="relative">
                <select
                  name="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className={`w-full appearance-none rounded-xl border px-4 py-2.5 text-sm outline-none transition-all text-black bg-white ${
                    formik.touched.category && formik.errors.category
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="coffee">Coffee</option>
                  <option value="non-coffee">Non-Coffee</option>
                  <option value="snack">Snack</option>
                  <option value="food">Food</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              {formik.touched.category && formik.errors.category ? (
                <div className="mt-1 text-xs text-red-500">
                  {formik.errors.category}
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Price */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    className={`w-full rounded-xl border pl-8 pr-4 py-2.5 text-sm outline-none transition-all text-black bg-white ${
                      formik.touched.price && formik.errors.price
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    }`}
                    placeholder="0.00"
                  />
                </div>
                {formik.touched.price && formik.errors.price ? (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.price}
                  </div>
                ) : null}
              </div>

              {/* Stock */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.stock}
                  className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all text-black bg-white ${
                    formik.touched.stock && formik.errors.stock
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                  placeholder="0"
                />
                {formik.touched.stock && formik.errors.stock ? (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.stock}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Image URL */}
            {/* <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="imageUrl"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.imageUrl}
                className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all text-black bg-white ${
                  formik.touched.imageUrl && formik.errors.imageUrl
                    ? "border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                }`}
                placeholder="https://example.com/image.jpg"
              />
              {formik.touched.imageUrl && formik.errors.imageUrl ? (
                <div className="mt-1 text-xs text-red-500">
                  {formik.errors.imageUrl}
                </div>
              ) : null}
            </div> */}
            <input type="file" className="file-input" />

            {/* Description */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                rows={3}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-black bg-white"
                placeholder="Product description..."
              />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex gap-3 border-t border-gray-100 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Create Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
