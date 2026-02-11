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
      price: "",
      description: "",
      isAvailable: true,
      image: [] as File[],
    },
    onSubmit: (values) => {
      console.log(values);
      // TODO: Call API to create menu
      // alert(JSON.stringify(values, null, 2));
      // onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <form onSubmit={formik.handleSubmit}>
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

              {/* Price */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-semibold">
                    Rp
                  </span>
                  <input
                    type="number"
                    name="price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                    className={`w-full rounded-xl border pl-12 pr-4 py-2.5 text-sm outline-none transition-all text-black bg-white ${
                      formik.touched.price && formik.errors.price
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    }`}
                    placeholder="25000"
                  />
                </div>
                {formik.touched.price && formik.errors.price ? (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.price}
                  </div>
                ) : null}
              </div>

              {/* Image URL */}
              {/* Image Upload */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Menu Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    if (e?.currentTarget?.files) {
                      formik?.setFieldValue(
                        "images",
                        Array.from(e?.currentTarget?.files), // [{file1}]
                      );
                    }
                  }}
                  onBlur={formik.handleBlur}
                  className="file-input w-full max-w-xs"
                  multiple
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className="mt-1 text-xs text-red-500">
                    {formik.errors.image as string}
                  </div>
                ) : null}
              </div>

              {/* Is Available Toggle */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="isAvailable"
                  id="isAvailable"
                  checked={formik.values.isAvailable}
                  onChange={formik.handleChange}
                  className="toggle toggle-primary"
                />
                <label
                  htmlFor="isAvailable"
                  className="cursor-pointer text-sm font-medium text-gray-700 select-none"
                >
                  Available for Order
                </label>
              </div>

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
    </form>
  );
}
