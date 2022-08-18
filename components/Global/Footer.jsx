import React from "react";

function Footer() {
  return (
    <footer className="relative z-20">
      <div className="bg-blue-600">
        <footer className="max-w-[1350px] px-6 mx-auto py-12 md:py-24  w-full relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8">
            <div className="w-full col-span-2 xl:col-span-1 order-2 md:order-1">
              <h6 className="text-white text-xl font-bold text-left">
                Conquer New Peaks
              </h6>
              <p className="mt-5 xl:w-1/2 text-white">
                In today's era of rapid growth in digital technology, You can
                never go wrong Digitizing your product.
              </p>
              <ul className="mt-12 md:mt-24 xl:mt-48 text-white flex flex-wrap gap-6">
                <li className="flex-shrink-0">
                  <span className="text-base font-semibold block">
                    Our Phone Number
                  </span>
                  <a href="tel:+251114701187" className="hover:underline">
                    <span className="text-sm block mt-2 hover:underline">
                      +251-114-701-187
                    </span>
                  </a>
                </li>
                <li className=" flex-shrink-0">
                  <span className="text-base font-semibold block">Our Email</span>
                  <a href="mailto:info@madtechet.com" className="hover:underline">
                    <span className="text-sm block mt-2 hover:underline">
                      info@madtechet.com
                    </span>
                  </a>
                </li>
                <li className=" flex-shrink-0">
                  <span className="text-base font-semibold block">Address</span>
                  <span className="text-sm block mt-2">
                    Meskel flower Jema Building 9th floor, A.A
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full col-span-2 xl:col-span-1  order-1 md:order-2">
              <div>
                <form className="grid grid-cols-1 xl:place-items-end">
                  <div className="w-2/3">
                    <input
                      className="text-white placeholder-gray-100 outline-none bg-blue-600 border-white border-b pb-2 w-full  mt-8"
                      placeholder="*Name"
                      name="name"
                    />
                  </div>
                  <div className="w-2/3">
                    <input
                      className="text-white placeholder-gray-100 outline-none bg-blue-600 border-white border-b pb-2 w-full mt-8"
                      placeholder="* Email"
                      name="email"
                    />
                  </div>
                  <div className="w-2/3">
                    <input
                      className="text-white placeholder-gray-100 outline-none bg-blue-600 border-white border-b pb-2 w-full mt-8"
                      placeholder="Phone Number"
                      name="phone"
                    />
                  </div>
                  <div className="w-2/3">
                    <textarea
                      className="mt-8 bg-blue-600 outline-none border-b border-white w-full placeholder-gray-100 text-white resize-none"
                      placeholder="* How can we help ?"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
                  <button
                    className="btn-xl bg-white text-primary mt-14 flex items-center py-3 px-6"
                    type="submit"

                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 grid place-items-center">
            <div className="w-1/4"></div>
          </div>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
