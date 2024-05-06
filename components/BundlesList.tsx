import Image from "next/image";

const bundles = [
  {
    id: 1,
    name: "The Stainless Steel",
    href: "#",
    imageSrc: "/placeholderImg.jpeg",
    imageAlt: "Máquina de Afeitar Afeitto de Acero Inoxidable",
    price: "S/ 46.90",
    color: "Black",
  },
  {
    id: 2,
    name: "The Stainless Steel",
    href: "#",
    imageSrc: "/placeholderImg.jpeg",
    imageAlt: "Máquina de Afeitar Afeitto de Acero Inoxidable",
    price: "S/ 46.90",
    color: "Black",
  },
  {
    id: 3,
    name: "The Stainless Steel",
    href: "#",
    imageSrc: "/placeholderImg.jpeg",
    imageAlt: "Máquina de Afeitar Afeitto de Acero Inoxidable",
    price: "S/ 46.90",
    color: "Black",
  },
];

interface BundlesListProps {
  id: string;
}

export default function BundlesList({ id }: BundlesListProps) {
  return (
    <div className="bg-white" id={id}>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Combina y Ahorra
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {bundles.map((bundle) => (
            <div key={bundle.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={bundle.imageSrc}
                  alt={bundle.imageAlt}
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={bundle.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {bundle.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{bundle.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {bundle.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
