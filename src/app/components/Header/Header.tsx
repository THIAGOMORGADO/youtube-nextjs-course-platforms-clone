'use client'
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-center bg-primary py-4 ">
      <ul className="flex items-center justify-center gap-4">
        <li className="my-2">
          <Link href="/" className=" border-2 rounded-md py-2 px-1 font-bold">CODASE</Link>
        </li>
        <li>
          <Link href="/" className="data-[active=true]:underline" data-active={currentPath === '/'} >Pagina Inicial</Link>
        </li>
        <li>
          <Link href="/cursos" className="data-[active=true]:underline" data-active={currentPath === '/cursos'}>Curso</Link>
        </li>
        <li>
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex items-center gap-1"
          >
            Blog
            <MdOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  );
}