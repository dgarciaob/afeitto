import Image from "next/image";

const products = [
  {
    id: 1,
    name: "The Stainless Steel",
    href: "/stainless-steel",
    imageSrc: "/placeholderImg.jpeg",
    imageAlt: "Máquina de Afeitar Afeitto de Acero Inoxidable",
    price: "S/ 46.90",
    color: "Black",
  },
  {
    id: 2,
    name: "4-pack Cartuchos de Afeitar",
    href: "cartridge",
    imageSrc: "/placeholderImg.jpeg",
    imageAlt: "Máquina de Afeitar Afeitto de Acero Inoxidable",
    price: "S/ 36.90",
    color: "Black",
  },
  {
    id: 3,
    name: "Steel Holder",
    href: "holder",
    imageSrc: "/placeholderImg.jpeg",
    imageAlt: "Máquina de Afeitar Afeitto de Acero Inoxidable",
    price: "S/ 6.90",
    color: "Silver",
  },
];

interface ProductListProps {
  id: string;
}

export default function ProductList({ id }: ProductListProps) {
  return (
    <div className="bg-white" id={id}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nuestros Productos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
