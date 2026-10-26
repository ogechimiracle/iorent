"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiLogOut } from "react-icons/fi";

import { adminNavLinks } from "@/utils/constant";
import ThemeToggle from "../theme-toggle";
import { useAuth } from "@/context/AuthContext";

export default function AdminNavBar() {
  const { logout } = useAuth();
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  return (
    <aside className="h-full w-full">
      {/* Sidebar Header */}
      <div className="flex w-full items-center justify-between border-b px-4 py-3 dark:border-slate-700">
        <div>
          <p className="text-xl font-bold text-black dark:text-white">
            Carento
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Admin Dashboard
          </p>
        </div>

        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="mt-8 flex flex-col gap-1 px-4">
        {adminNavLinks.map((item) => {
          const Icon = item.icon;
          const hasChildren =
            "children" in item && Array.isArray(item.children);

          const isChildActive =
            hasChildren &&
            item?.children?.some((child) => pathname === child.path);

          const isActive =
            ("path" in item && pathname === item.path) ||
            Boolean(isChildActive);

          const isOpen =
            openMenus.includes(item.label) || Boolean(isChildActive);

          if (hasChildren) {
            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => toggleMenu(item.label)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 transition-colors duration-200 ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </span>

                  <FiChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Dropdown */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-5 mt-1 flex flex-col gap-1 border-l border-gray-200 pl-3 dark:border-slate-700">
                      {item?.children?.map((child) => {
                        const ChildIcon = child.icon;
                        const childIsActive = pathname === child.path;

                        return (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 ${
                              childIsActive
                                ? "bg-green-600 text-white"
                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700"
                            }`}
                          >
                            <ChildIcon size={17} />
                            <span>{child.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (!("path" in item) || !item.path) {
            return null;
          }

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-200 ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}

        {/* Sign Out */}
        <div className="mt-4 border-t pt-4 dark:border-slate-700">
          <button
            type="button"
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg bg-green-600 px-4 py-3 text-white transition-colors duration-200 hover:bg-green-700"
          >
            <FiLogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
