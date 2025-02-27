import Link from "next/link";
import { LuScroll, LuBookmark, LuArrowUpRight } from "react-icons/lu";

export default function Buttons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full py-3">
      <Link
        href="/manifesto"
        className="group relative flex items-center justify-between sm:flex-1 h-[70px] px-6 rounded-md border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#191919] button"
      >
        <div className="flex items-center gap-3 text-[#FF6821] dark:text-[#FF8040]">
          <LuScroll className="text-[22px]" />
          <span className="text-[17px] font-medium">Manifesto</span>
        </div>
        <LuArrowUpRight className="text-neutral-500 group-hover:text-[#FF6821] dark:group-hover:text-[#FF8040] text-[22px]" />
      </Link>

      <Link
        href="#"
        className="group relative flex items-center justify-between sm:flex-1 h-[70px] px-6 rounded-md border border-neutral-300 dark:border-neutral-700 bg-[#FAFAFA] dark:bg-[#191919] button"
      >
        <div className="flex items-center gap-3 dark:text-[#4CAF82] text-[#036938]">
          <LuBookmark className="text-[22px]" />
          <span className="text-[17px] font-medium">Substack</span>
        </div>
        <LuArrowUpRight className="text-neutral-500 group-hover:text-[#036938] dark:group-hover:text-[#4CAF82] text-[22px]" />
      </Link>
    </div>
  );
}
