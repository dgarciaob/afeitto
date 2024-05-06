import { cn } from "@/lib/utils";

import { StarIcon } from "@heroicons/react/20/solid";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const reviews = { href: "/", average: 4, totalCount: 117 };

const product = {
  name: "The Stainless Steel",
  price: "S/ 46.90",
  href: "/stainless-steel",
  description:
    "Únete a la era del AI (Acero Inoxidable). Mereces una máquina a tu nivel. Fabricada con acero inoxidable importado de Suecia, diseñada con un ángulo especial que se adapta a los contornos de tu rostro para un afeitado cómodo y preciso.",
  colors: [
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  highlights: [
    "Hecha con Acero Inoxidable",
    "Diseño ergonómico",
    "Afeitado cómodo y preciso",
    "Diseño minimalista y elegante",
  ],
  details:
    "Incluye: 1 Máquina de Afeitar Afeitto de Acero Inoxidable y 1 Cartucho de Afeitar Afeitto de 6 hojas.",
};

const StainlessSteelPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <Link href={"/"} className="flex flex-row space-x-4 items-center">
        <ArrowLeft size={20} />
        <p className="test-sm tracking-normal">Volver</p>
      </Link>
      <LayoutGridDemo />
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.name}
          </h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Información de Producto</h2>
          <p className="text-3xl tracking-tight text-gray-900 font-semibold">
            {product.price}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={cn(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} de 5 estrellas</p>
              <a
                href={reviews.href}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 animate-buttonheartbeat"
            >
              Añadir al carrito
            </button>
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Descripción</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Detalles</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">{product.details}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StainlessSteelPage;
