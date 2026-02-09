import { Metadata, ResolvingMetadata } from "next";
import Counter from "../../components/counter";

const getMenu = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:8080/api/menus/${slug}`, {
      cache: "no-cache",
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const menu = await getMenu(slug);

  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: menu?.name,
    description: menu?.description,
    keywords: menu?.name,
    openGraph: {
      title: menu?.name,
      description: menu?.description,
      images: [
        {
          url: menu?.imageUrl,
          width: 640,
          height: 640,
          alt: menu?.name,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: menu?.name,
      description: menu?.description,
      images: [
        {
          url: menu?.imageUrl,
          width: 640,
          height: 640,
          alt: menu?.name,
        },
        ...previousImages,
      ],
    },
  };
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const menu = await getMenu(slug);

  if (!menu) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10">
      <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden flex justify-center items-center ">
        <figure className="lg:w-5/12 h-75 lg:h-125">
          <img
            src={menu.imageUrl || "https://placehold.co/600x400"}
            alt={menu.name}
            className="w-full h-75 lg:h-125 object-cover"
          />
        </figure>
        <div className="card-body lg:w-7/12 p-8">
          <h1 className="card-title text-4xl font-bold mb-2">{menu.name}</h1>
          <p className="text-gray-600 text-lg mb-4">{menu.description}</p>
          {menu.price && (
            <p className="text-3xl font-bold text-primary mb-6">
              Rp {menu.price.toLocaleString("id-ID")}
            </p>
          )}

          <div className="divider"></div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-lg font-semibold">Quantity</span>
            </label>
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}
