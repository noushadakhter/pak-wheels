import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-blue-300 min-h-screen py-12">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Honda Civic Price in Pakistan, Images, Reviews, & Specs
      </h1>

      {/* Image Section */}
      <div className="flex justify-center mb-12">
        <Image 
          src="/images/car4.jpg" 
          alt="Honda Civic details image"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Highlights and Key Features */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Highlights and Key Features</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Efficient Engine</h3>
            <p className="text-gray-600">
              The Honda Civic is powered by a fuel-efficient 1.5L engine, designed for economical city driving with excellent mileage.
            </p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Compact Design</h3>
            <p className="text-gray-600">
              With a compact body, the Civic is perfect for urban driving, offering easy maneuverability and hassle-free parking.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Safety Features</h3>
            <p className="text-gray-600">
              The Civic includes safety essentials such as airbags, ABS, and seatbelt reminders, providing peace of mind on every journey.
            </p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Comfortable Interior</h3>
            <p className="text-gray-600">
              The interior of the Civic offers comfortable seating with ample legroom, making it a cozy ride for both driver and passengers.
            </p>
          </div>
        </div>
      </div>

      {/* Comparisons with Competitors */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Comparisons with Competitors</h2>
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-8">Honda Civic VS Toyota Corolla</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-4 text-gray-600 list-disc list-inside">
              <li>Honda Civic offers a more refined and stylish design.</li>
              <li>Known for its smooth driving experience and fuel efficiency.</li>
              <li>Honda Civic has a more compact and modern interior layout.</li>
              <li>Favored for its advanced features and reliable performance.</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4 text-gray-600 list-disc">
              <li>Corolla offers a slightly larger cabin space.</li>
              <li>Known for its durability and low maintenance costs.</li>
              <li>Both models are comparable in safety features.</li>
              <li>Corolla is preferred for its spacious interior and longevity.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flexible Payment Options */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Flexible Payment Options for Your Honda Civic</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-medium text-gray-800">Cash Payment</h3>
            <p className="text-gray-600">Simplicity: Pay the full price upfront and drive away in your Civic.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Bank Financing</h3>
            <p className="text-gray-600">Personalized Plans: Choose from a range of financing options tailored to your needs.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Installment Plans</h3>
            <p className="text-gray-600">Budget-Friendly: Enjoy manageable monthly payments for your Civic.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">Trade-In Options</h3>
            <p className="text-gray-600">Maximize Value: Trade in your old vehicle and reduce the cost of your new Civic.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Leasing</h3>
            <p className="text-gray-600">Drive New: Experience the latest model every few years with a flexible lease plan.</p>
            <hr className="my-6 border-gray-300" />

            <h3 className="text-lg font-medium text-gray-800">Online Payment</h3>
            <p className="text-gray-600">Ease of Access: Securely make payments online from the comfort of your home.</p>
          </div>
        </div>
      </div> 

      {/* Payment Button */}
      <div className="flex justify-center">
        <Link href="/checkout">
          <button className="bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white py-3 px-10 rounded-lg font-semibold shadow-md">
            Make Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Page;