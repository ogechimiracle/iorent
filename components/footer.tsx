"use client";

import {
  LuMapPin,
  LuMail,
  LuClock,
  LuPhone,
  LuMail as MailIcon,
  LuArrowUp,
} from "react-icons/lu";
import { TbSteeringWheelFilled } from "react-icons/tb";

const linkColumns = [
  {
    title: "Company",
    links: [
      "About Us",
      "Our Awards",
      "Agencies",
      "Copyright Notices",
      "Terms of Use",
      "Privacy Notice",
      "Lost & Found",
    ],
  },
  {
    title: "Our Services",
    links: [
      "Car Rental Services",
      "Vehicle Leasing Options",
      "Long-Term Car Rentals",
      "Car Sales and Trade-Ins",
      "Luxury Car Rentals",
      "Rent-to-Own Programs",
      "Fleet Management Solutions",
    ],
  },
  {
    title: "Our Partners",
    links: [
      "Affiliates",
      "Travel Agents",
      "AARP Members",
      "Points Programs",
      "Military & Veterans",
      "Work with us",
      "Advertise with us",
    ],
  },
  {
    title: "Support",
    links: [
      "Forum support",
      "Help Center",
      "Live chat",
      "How it works",
      "Security",
      "Refund Policy",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 pt-10 pb-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8">
          <h2 className="text-xl md:text-2xl font-bold leading-snug max-w-md">
            Subscribe to see secret deals prices drop the moment you sign up!
          </h2>

          <div className="flex w-full md:w-auto gap-3">
            <div className="flex items-center gap-2 bg-transparent border border-gray-700 rounded-md px-4 py-2 flex-1 md:w-72">
              <MailIcon size={16} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="cursor-pointer hover:text-white transition-colors bg-transparent outline-none text-sm placeholder:text-gray-500 w-full"
              />
            </div>
            <button className="cursor-pointer hover:text-white transition-colors bg-green-500 hover:bg-green-400 transition-colors text-black font-medium text-sm px-6 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-gray-800" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <TbSteeringWheelFilled size={30} />
              </div>
              <span className="text-lg font-bold">Carento</span>
            </div>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <LuMapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  2356 Oakwood Drive, Suite 18, San Francisco, California 94111,
                  US
                </span>
              </div>
              <div className="flex items-center gap-2">
                <LuClock size={16} className="shrink-0" />
                <span>Hours: 8:00 - 17:00, Mon - Sat</span>
              </div>
              <div className="flex items-center gap-2">
                <LuMail size={16} className="shrink-0" />
                <span>support@carento.com</span>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                <LuPhone size={16} />
                <span>Need help? Call us</span>
              </div>
              <a
                href="tel:+12225553399"
                className="text-green-500 font-semibold text-lg"
              >
                +1 222-555-33-99
              </a>
            </div>
          </div>
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-800" />
        <div className="flex items-center justify-between pt-6 text-sm text-gray-500">
          <p>© 2024 Carento Inc. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer hover:text-lihjt-gray transition-colors w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Scroll to top"
          >
            <LuArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
