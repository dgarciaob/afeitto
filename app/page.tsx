import BundlesList from "@/components/BundlesList";
import ProductList from "@/components/ProductList";

import { TypewriterEffectSmoothDemo } from "@/components/Typewriter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-8">
      {/* Hero Banner */}
      <div
        className="mx-auto max-w-2xl px-6 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-16 bg-slate-100 rounded-xl mt-8 lg:mt-14"
        style={{
          backgroundImage: "url('/bgHero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              <span className="block">Vive el mejor</span>
            </h1>
            <TypewriterEffectSmoothDemo />
            <p className="mt-6 md:mt-8 lg:mt-10 text-xl text-slate-900">
              Las mejores máquinas de afeitar de acero inoxidable duraderas para
              un afeitado perfecto.
            </p>
            <div className="mt-8">
              <Link href="/#products">
                <button className="animate-buttonheartbeat rounded-md bg-blue-800 px-6 py-3 font-semibold text-white w-full sm:w-auto">
                  Compra Ahora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Suscríbete y Afeittate
            </h2>
            <p className="mt-4 text-gray-500">
              Únete al club de afeitto y recibe tus cartuchos de afeitar en la
              puerta de tu casa. Sin moverte, sin pedir nuevamente.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Paso 1</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Elige nuestro set de suscripción
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Paso 2</dt>
                <div className="flex flex-row space-x-2 items-center">
                  <dd className="mt-2 text-sm text-gray-500">
                    Selecciona la frecuencia de recambio
                  </dd>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400 items-center" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-72">
                          Recomendaremos la frecuencia adecuada de acuerdo a tu
                          frecuencia de afeitado semanal.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Paso 3</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  Revisa y disfruta!
                </dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-1">
            <Image
              src="/placeholderImg.jpeg"
              alt="Afeitto Set"
              width={1000}
              height={1000}
              className="rounded-lg bg-gray-100 h-full max-h-[503px] w-full"
            />
            <button
              type="button"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 animate-buttonheartbeat"
            >
              Elegir Set
            </button>
          </div>
        </div>
      </div>

      {/* Product List */}
      <ProductList id="products" />

      {/* Bundles List */}
      <BundlesList id="bundles" />
    </main>
  );
}
