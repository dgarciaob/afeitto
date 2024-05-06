import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  return (
    <Link
      href={`https://wa.me/51999936189?text=${encodeURIComponent(
        "Hola! vengo de Afeitto y quisiera más información sobre "
      )}`}
      target="_blank"
      className="h-14 w-14"
    >
      <Image
        src="/wappLogo.png"
        alt="WhatsApp"
        width={1000}
        height={1000}
        className="rounded-full h-14 w-14"
      />
    </Link>
  );
};
