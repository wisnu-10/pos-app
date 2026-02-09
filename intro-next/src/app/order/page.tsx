"use client";

import React from "react";
import Link from "next/link";

export default function OrderPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        body {
          font-family: "Inter", sans-serif;
          min-height: max(884px, 100dvh);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
        }
        .material-symbols-outlined {
          font-variation-settings:
            "FILL" 0,
            "wght" 400,
            "GRAD" 0,
            "opsz" 24;
        }
      `}</style>

      <div className="flex flex-col h-screen overflow-hidden bg-[#f1f5f9] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-sans">
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-800 shrink-0 z-20">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#137fec] rounded-xl flex items-center justify-center shadow-lg shadow-[#137fec]/20">
                <span className="material-symbols-outlined text-white text-2xl">
                  storefront
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                SkyPOS
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <div>
              <h1 className="text-base font-bold text-slate-900 dark:text-white">
                Order Menu
              </h1>
              <div className="flex items-center gap-1.5">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Cashier: Sarah Miller
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-lg">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#137fec] transition-colors">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800/50 border-transparent focus:border-[#137fec] focus:ring-4 focus:ring-[#137fec]/10 rounded-xl py-2 pl-10 pr-4 text-sm transition-all outline-none"
                placeholder="Search products or scan barcode (F1)"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1e293b]"></span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-xl text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  logout
                </span>
                End Shift
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-[#0f172a]">
            {/* Category Filter */}
            <div className="px-6 py-4 flex gap-3 overflow-x-auto custom-scrollbar bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-800">
              <button className="px-6 py-2 bg-[#137fec] text-white rounded-full font-semibold text-sm whitespace-nowrap">
                All Menu
              </button>
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-medium text-sm whitespace-nowrap">
                Coffee
              </button>
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-medium text-sm whitespace-nowrap">
                Non-Coffee
              </button>
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-medium text-sm whitespace-nowrap">
                Pastries
              </button>
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-medium text-sm whitespace-nowrap">
                Main Course
              </button>
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-medium text-sm whitespace-nowrap">
                Desserts
              </button>
              <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-medium text-sm whitespace-nowrap">
                Snacks
              </button>
            </div>

            {/* Product Grid */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                <ProductCard
                  name="Hot Espresso"
                  price="$3.50"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuCYTlgYhbDdf9jGH1UTKiipkwuh6OFqUDBEOXCsK8zi-k7FIHKIAXEIATXK611210K3y5G1dusuccli1PHRVm1mA3VXD9P8H-BQmhboCFeU9jA96vImTnCRU3q3UAgTUwui92lsAA5ivK4GI0m5ASQhlWksffPonB8-MHtropD5UmEfPo9pWZ7_ejTYoYgGMA5VcnKAvGpeZ9oEqHa0ZmjlaJkDJLDhX6sOFzBc2MkKfqrm70OUJoWr_NIWEVxN1d7cKmW25zZfdAs"
                />
                <ProductCard
                  name="Iced Caramel Latte"
                  price="$4.75"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDOiMDTQQCIX5unWGsccnCje0y4jmhdx7x5PHU5gyS6HHYCA7F9za496VdBK1Dox8QPncBrxGR3ZhLKuSJ-kf0--6MbX1UGHX3Itjt6kkLkweBAiJjUq_XfqTvBBjJWH0NveATIKz8BVKZm23sezSxFEd_gkjltMPSME_INCDLArwUR6UByW_dXGhY2EnjHFc3lPYp9RLp_SAMrYNEWi-fGUMgE4xppO4Nf7OwVFMePdy6xRzkVpYANLmAonveVa-OWO47hddTykzM"
                />
                <ProductCard
                  name="Classic Cappuccino"
                  price="$4.25"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuASBdP5WCRfX9IXlQ344WTQKipQsD8UPTFGi5ScwDHZtHMmiKXjGMp9VCquTO3vWrEG2I3Iiqb9W9lUgdk4wW7Ud7iJTsbfBDm-_qdDUBIRIgGEIR1dUQQEhL83SKC3z6K2Wuj-JuR8KiyM7r3Kwssa7tYphzOU8I-nrA1r2IfHbDsNnmJWiPPZdJN-U3lZrAasL-X6Gjpnhn_CioFwI8wPrjpNnqKEbcNONz1fwKGz22axKCCE9edIetDCRMMXE9Gjw42CYTYiyCo"
                />
                <ProductCard
                  name="Glazed Donut"
                  price="$2.50"
                  stock="Low Stock"
                  stockColor="orange"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2mZF--ZiK-z1uOpMN2OIgxVK40JRAEvp-ywP7Vfya8v-xF2xL40eLU-gSdyinzdYwgjQu8Fm7_cX_CtA5USwun_8flV4OgR_hi0tddJjmBeh9BvfJf-V0sC3iKvUIFDmtNT3BNRQTMHbJyZ0jxx5WJh_n_BzW-r1WSfF9lT2bfsimhVeog1BPm6Op-TLWG3ege0aHScMdpYm_1FAmcFM3eUNBD62wrsw0cN4CQQRZ4EzIfdK6kdMe0MH9k5l6IFRPFMkWBeGTd2s"
                />
                <ProductCard
                  name="Chocolate Muffin"
                  price="$3.25"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuDHzsp5T7d7SYuNPgX6VSqglHpQH9I52bFRFvlXl8OPFPFGQQr7uhmWCG3Q3yZiTJgcMe3Ii422Y848hmr8nFh2jyvaU7AVX2dxT6XPS0kNU7fOapDoNemMJz1N4hQm9qmZpGicej5eYe2umsrrrN8PdRriRcLO-UpuFyb1jFKb5KCknBb-3DzlPd1Lm-avIeQQKp_9YEWkVfZcUrQ4u7JOvVLT-cvXZH1-NjD6fdPLrCW4p_Q1uQfya7g4KQUjtVLrD-lBTttM_x8"
                />
                <ProductCard
                  name="Margherita Pizza"
                  price="$12.00"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAXD3CiHj3RqkPh6bmIv0LPHD7nXyRoi25jk2O0qqBaD4mQSMrbJS0J4SS_oUalMNDz7WVYCaE8STPJI3WVDynWmUmMINRj7KsZkgqRJwTaG4OPofHU8WfUSzAoILf69hFfruuqtvZdVXjqIHU5baRNl7rUnf0-CFVamJjPGhzb2bz4sz8iPT5nhz8O0-F0_hVcv6_jz_TY8wfaElQOKa5mqX4S_iIVb5VaKerWDdoGzRkSKoQoz612Zmhc2EN9Sk2EEAb1AArTwVs"
                />
                <ProductCard
                  name="Green Matcha Tea"
                  price="$4.50"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuCc6h2Jso3GhdCh1O6kdJX0_W195t38Z-kc6HuwMx3ZExpcbinOLy45qkPDkbj6MrcdrI0X_ylWsMPRaIsgbTXc_NnL6aOrfzkpPyh2STd7u33D9Kj_kstS7BKtGaPh756RXbE5vdD8DAn2AOCuuYwUuezH39IuM8zf-NSHKhI-48F-0mK-D7pVo_MCdCDkoUv1cwjhhvcMXnV0bA7qmHXe1WpcckoObFnKBwZ8VDB7y9i7zlolTPhwNitC_ExW0o2UvUtv5j4qI5E"
                />
                <ProductCard
                  name="Penne Arrabbiata"
                  price="$11.50"
                  stock="In Stock"
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQTQ-gClK2E6Q5DuWRIXwn3bwKe-i9wQH-Hof-Lm3zwn2gVnVwj03umjw8cc0A8q2zkM7YIcFz8stkmRy25wBsAWGsAor1xW7QgY4H_D0qO_VWabt0zbMOKsX3FK0K_I87sWe_uMbaxKTWRSIRqF6wo0ZsOwDUZQocThwG9td8k99G5X3kM8e6_Oiuf4Zg3rF2KNptOzBY-UdaxFkEMxvLtgxjD7KSb0BjPSvcg2pwBGnfiK-yI0BcxB_FARElcYLwgaGryCiJ0A"
                />
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-[400px] flex flex-col bg-white dark:bg-[#1e293b] border-l border-slate-200 dark:border-slate-800 shadow-xl z-10">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-xl font-bold">Current Order</h2>
              <button className="text-[#137fec] text-sm font-semibold hover:underline">
                Clear All
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              <OrderItem
                name="Iced Caramel Latte"
                price="$9.50"
                quantity={2}
                notes="Less Sugar, Oat Milk"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAmnoFHuiDAAORpKCKsYKPx8Lk_wdE0Iy-1YR1TuoUh9m1q8r-N7S0tKf1wI0jOdNLko7etv_kDPTLLVB3rAH5rbIyleuT_s8lPCYQJ6ptu_OFEihljx22XoELJNHMydTa21tVBu5UsDV3_UkbX6UF_-Pm_KRJsc4cRo4ouSPKJJf85L1X1LV4F2m28_8pudsxvqtL21-yYYMCbqfyaJ7C3ToQvrXsOmmYp5MhLg3QCxB2MUwjRWgK8jHKECzEiO8YVV4u_yX_HBaw"
              />
              <OrderItem
                name="Chocolate Muffin"
                price="$3.25"
                quantity={1}
                notes="Standard"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuABfG6FR1RXzlAfxBe_1rZArZPcPoIC3DN8pqbNsDJcLHBJoKyQCO4e2AlPwLy2JVYdl06vIZubm2P7L4IFyKwkNFd4keSw0Ce-Yfash8vhZ7rlufPYg2afjqLZ6sebjHgjI5gq40xNTrUAMFaSF0og-vNHbUHuVtqm9yy6MPjtgkZ0Oc3RYes3llZbi6YHOfhy9V1lj_CmhJReNqNY3b0kTrDQi9744G3JCx6V5TKtWdCVr5AVDP-7a6OrFry7uLjb6ePdHo0iCJE"
              />
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>Subtotal</span>
                  <span>$12.75</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>Tax (10%)</span>
                  <span>$1.28</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span>Total</span>
                  <span className="text-[#137fec]">$14.03</span>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <button className="flex-1 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-semibold flex flex-col items-center justify-center text-xs">
                  <span className="material-symbols-outlined mb-1">
                    loyalty
                  </span>
                  Promo
                </button>
                <button className="flex-1 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-semibold flex flex-col items-center justify-center text-xs">
                  <span className="material-symbols-outlined mb-1">
                    person_add
                  </span>
                  Customer
                </button>
                <button className="flex-1 bg-white dark:bg-[#1e293b] border border-slate-200 dark:border-slate-700 py-3 rounded-xl font-semibold flex flex-col items-center justify-center text-xs">
                  <span className="material-symbols-outlined mb-1">
                    receipt_long
                  </span>
                  Bill
                </button>
              </div>

              <button className="w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-bold py-4 rounded-2xl shadow-lg shadow-[#137fec]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg">
                Proceed to Checkout
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
}

// Helper components
function ProductCard({
  name,
  price,
  stock,
  stockColor = "green",
  image,
}: {
  name: string;
  price: string;
  stock: string;
  stockColor?: string;
  image: string;
}) {
  const stockColors: Record<string, string> = {
    green:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    orange:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  };

  return (
    <div className="bg-white dark:bg-[#1e293b] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-[#137fec] group">
      <div className="h-32 bg-slate-200 dark:bg-slate-800 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={image}
        />
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm line-clamp-1">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-[#137fec] font-bold">{price}</span>
          <span
            className={`text-[10px] ${stockColors[stockColor]} px-2 py-0.5 rounded-full uppercase font-bold tracking-wider`}
          >
            {stock}
          </span>
        </div>
      </div>
    </div>
  );
}

function OrderItem({
  name,
  price,
  quantity,
  notes,
  image,
}: {
  name: string;
  price: string;
  quantity: number;
  notes: string;
  image: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-semibold text-sm">{name}</h4>
          <span className="font-bold text-sm">{price}</span>
        </div>
        <p className="text-xs text-slate-500 mb-2">{notes}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button className="w-7 h-7 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-md transition-colors">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="w-8 text-center text-sm font-bold">
              {quantity}
            </span>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-md transition-colors">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
          <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
