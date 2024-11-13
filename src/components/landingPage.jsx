'use client'

import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Search, Star, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
   
    <div className="min-h-screen sm:mt-10 bg-[#FFD700]">
      
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-white md:h-[600px] p-6 shadow-xl">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-[#FF4500]"
              >
                <ShoppingBag className="h-6 w-6" />
                <span className="text-2xl font-bold">Sale</span>
              </motion.div>

              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  {["Home", "Product", "Payment", "Contact"].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <button className="text-gray-600 hover:text-gray-900">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:block rounded-full bg-[#FF4500] px-6 py-2 text-white hover:bg-[#FF4500]/90 transition-colors"
                >
                  Login
                </motion.button>
                <button
                  className="md:hidden text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className=" mt-4 md:hidden"
              >
                <ul className="space-y-2">
                  {["Home", "Product", "Payment", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="block py-2 text-gray-600 hover:text-gray-900"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </header>

          {/* Main Content */}
          <main className="grid gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: -10 }}
                className="relative"
              >
                <h1 className="text-4xl font-bold text-gray-600 tracking-tight sm:text-5xl lg:text-6xl">
                  Exclusive
                  <br />
                  Spring Sale
                </h1>
                <p className="mt-4 max-w-xl text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
                  <br />
                  nonummy nibh euismod tincidunt ut laoreet dolore magna 
                  <br />
                  aliquamerat volutpat.
                </p>
               

                <Image
                  src="/assets/hax3.png"
                  alt="Spring sale shopper"
                  width={400}
                  height={300}
                  className=" hidden md:block md:absolute top-[-10vh] sm:top-[29px] left-[50%] sm:left-[330px] transform -translate-x-1/4 sm:-translate-x-0"
                 
                />
              

                <div className="mt-12">
                  <div className="flex items-center gap-2 text-[#40E0D0]">
                    <Star className="h-8 w-8 fill-current" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Trusted Users
                    </h2>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-current text-[#FF4500]"
                        />
                      ))}
                  </div>
                  <p className="mt-2 text-gray-600">
                    Over <span className="font-bold">10K</span> happy users all
                    over the world
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:mt-0"
            >
              <h2 className="mb-6 text-2xl font-bold">Latest Product</h2>
              <div className="space-y-4">
                {[
                  { icon: "👕", label: "Material", desc: "Lorem ipsum" },
                  { icon: "👖", label: "Material", desc: "Lorem ipsum" },
                  { icon: "👠", label: "Material", desc: "Lorem ipsum" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg bg-[#FFD700] p-4 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold">{item.label}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </main>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 md:left-[10px] transform translate-x-1/2">
            {/* <motion.div
              animate={{
                y: [10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="  text-4xl"
            >
              🦋
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  )
}