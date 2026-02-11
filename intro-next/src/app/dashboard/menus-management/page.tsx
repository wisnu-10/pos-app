"use client";

import { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import {
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePhoto,
} from "react-icons/hi2";
import CreateMenuModal from "./components/CreateMenuModal";
import useAuthGuard from "@/hoc/useAuthGuard";

function MenusManagementPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-60">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search product name, SKU, or category..."
            className="w-full rounded-xl bg-gray-100 py-2.5 pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
          />
        </div>

        {/* Category Filter */}
        <div className="relative inline-block">
          <select className="appearance-none rounded-xl bg-gray-100 px-4 py-2.5 pr-10 text-sm text-gray-700 hover:bg-gray-50 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>All Categories</option>
            <option>Coffee</option>
            <option>Non-Coffee</option>
            <option>Pastries</option>
            <option>Main Course</option>
            <option>Desserts</option>
            <option>Snacks</option>
          </select>
          <FiChevronDown
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
      </div>

      <div className="p-6">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                <tr>
                  <th className="px-6 py-4 text-left">Product</th>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Stock</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {/* Row 1 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                        <HiOutlinePhoto className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Caramel Macchiato
                        </p>
                        <p className="text-xs text-gray-500">SKU: COF-001</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
                      Beverages
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">Rp 45.000</td>
                  <td className="px-6 py-4 text-gray-700">124 units</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4 text-gray-500">
                      <button className="hover:text-blue-600">
                        <HiOutlinePencil className="h-5 w-5" />
                      </button>
                      <button className="hover:text-red-600">
                        <HiOutlineTrash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                        <HiOutlinePhoto className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Classic Beef Burger
                        </p>
                        <p className="text-xs text-gray-500">SKU: FUD-042</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
                      Main Course
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">Rp 120.000</td>
                  <td className="px-6 py-4 text-gray-700">45 units</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      ACTIVE
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4 text-gray-500">
                      <button className="hover:text-blue-600">
                        <HiOutlinePencil className="h-5 w-5" />
                      </button>
                      <button className="hover:text-red-600">
                        <HiOutlineTrash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-500">
                        <HiOutlinePhoto className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Avocado Toast
                        </p>
                        <p className="text-xs text-gray-500">SKU: FUD-018</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700">
                      Appetizers
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">Rp 85.000</td>
                  <td className="px-6 py-4 font-medium text-red-500">
                    Out of Stock
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                      STOCK OUT
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4 text-gray-500">
                      <button className="hover:text-blue-600">
                        <HiOutlinePencil className="h-5 w-5" />
                      </button>
                      <button className="hover:text-red-600">
                        <HiOutlineTrash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500">
            <span>Showing 1 to 3 of 42 products</span>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <HiOutlineChevronLeft />
              </button>

              <button className="rounded-lg bg-blue-600 px-3 py-1 text-white cursor-pointer">
                1
              </button>
              <button className="rounded-lg border px-3 py-1 hover:bg-gray-100 cursor-pointer">
                2
              </button>
              <button className="rounded-lg border px-3 py-1 hover:bg-gray-100 cursor-pointer">
                3
              </button>

              <button className="rounded-lg border px-2 py-1 hover:bg-gray-100 cursor-pointer">
                <HiOutlineChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="rounded-lg bg-blue-600 px-3 py-1 text-white hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
          >
            Create Menu
          </button>
        </div>
      </div>

      <CreateMenuModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
}

export default useAuthGuard(MenusManagementPage, ["ADMIN", "SUPER_ADMIN"]);
