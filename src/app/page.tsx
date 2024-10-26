'use client'
import Image from "next/image";
import Link from "next/link";
import { Leaf, Zap, BarChart3, Sprout, Wifi } from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-md">
        <Link className="flex items-center" href="#">
          <div className="h-8 w-8">
            <Image
              src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1729425342/heegcdguqkvorxr5mggs.png"
              alt="LeafDrone logo"
              width={32}
              height={32}
            />
          </div>
          <span className="ml-2 text-lg font-bold text-gray-800">LeafoDrone</span>
        </Link>
        <nav className="flex space-x-4 sm:space-x-6">
          <Link
            className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
            href="#benefits"
          >
            Benefits
          </Link>
          <Link
            className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
            href="#challenges"
          >
            Challenges
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-100 to-green-200">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-800">
              Transforming Agriculture with AI-Driven Plant Health Detection
            </h1>
            <p className="mx-auto max-w-3xl mt-4 text-gray-600 md:text-xl">
              Unlock the power of advanced technology to safeguard your crops with precision. LeafoDrone delivers real-time health and disease detection and monitoring to optimize crop health and increase yield.
            </p>
            <div className="mt-8 flex flex-wrap justify-center space-x-4">
                <Link href="#features">
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-200" >
                   Learn More
                  </button>
                </Link>
                <Link href="#contact">
                <button className="bg-transparent border border-green-600 text-green-600 py-2 px-6 rounded-lg hover:bg-green-50 shadow-md transition-all duration-200">
                 Contact Us
                 </button>
                </Link>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Cutting-Edge Features
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
              <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <div className="h-8 w-8 text-green-600">
                  <Image src="https://res.cloudinary.com/dk6m1qejk/image/upload/v1729425342/heegcdguqkvorxr5mggs.png" alt="GPS" width={32} height={32} />
                </div>
                <h3 className="text-lg font-semibold mt-4">AI-Powered Detection</h3>
                <p className="mt-2 text-gray-600">
                  Detect diseases and pests instantly with our AI-driven system, ensuring timely interventions to prevent crop loss.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <Leaf className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-semibold mt-4">Real-Time Monitoring</h3>
                <p className="mt-2 text-gray-600">
                  Stay ahead with 24/7 real-time crop monitoring that allows you to take action as soon as a threat is detected.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <BarChart3 className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-semibold mt-4">Yield Prediction</h3>
                <p className="mt-2 text-gray-600">
                  Maximize productivity by predicting yields based on real-time data analysis and insights powered by machine learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-16 md:py-24 lg:py-32 bg-green-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Why Choose LeafDrone?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
              <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <Sprout className="h-8 w-8 text-green-600" />
                <h3 className="text-lg font-semibold mt-4">Eco-Friendly</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                  <li>Minimizes pesticide use with targeted spraying</li>
                  <li>Reduces environmental impact</li>
                  <li>Preserves soil health</li>
                </ul>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <Zap className="h-8 w-8 text-yellow-600" />
                <h3 className="text-lg font-semibold mt-4">Cost-Effective</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                  <li>Lower input costs with optimized spraying</li>
                  <li>Reduce crop losses through early detection</li>
                  <li>Increase profitability with higher yields</li>
                </ul>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <Wifi className="h-8 w-8 text-blue-600" />
                <h3 className="text-lg font-semibold mt-4">Global Reach</h3>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                  <li>Accessible to farmers worldwide</li>
                  <li>Helps small and large farms alike</li>
                  <li>Supports sustainable agriculture initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Our Innovative Machine Learning Project
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Leaf Disease Detection with Our Own CNN Model
              </h3>
              <p className="mt-4 text-gray-600">
                Explore our cutting-edge machine learning model that enables real-time leaf disease detection. Powered by Tensorflow model, our solution brings unparalleled accuracy to identifying diseases before they spread.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <a
                  href="https://colab.research.google.com/drive/1qjVPrBiUZF8OTo0yj6oPmQ8MawxNwLCr?usp=sharing"
                  className="text-green-600 hover:text-green-800 hover:underline mt-4 inline-block transition duration-150"
                >
                  View the Project
                </a>
                <a
                  href="https://drive.google.com/file/d/1-bmAWAYmO0LLbcPobOK0ibeu_R9OQIf0/view?usp=drivesdk"
                  className="text-green-600 hover:text-green-800 hover:underline mt-4 inline-block transition duration-150"
                >
                  Dataset
                </a>
                <a
                  href="https://drive.google.com/file/d/1-gSlZ6gvhE2tYFFaleBMRqCSG61bTUEM/view?usp=drivesdk"
                  className="text-green-600 hover:text-green-800 hover:underline mt-4 inline-block transition duration-150"
                >
                  Model
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="challenges" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Overcoming Challenges & Scaling
            </h2>
            <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-lg font-semibold">Expanding Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To further the impact of LeafDrone, we are looking to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>Adapt our system for various crops and climates.</li>
                <li>Partner with agritech firms to enhance distribution.</li>
                <li>Integrate advanced analytics for soil, water, and climate monitoring.</li>
                <li>Collaborate with NGOs to bring precision farming to underserved regions.</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-100 to-green-200">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto bg-white  shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:swikarthanekar@gmail.com" className="text-green-600 hover:underline">
                    swikarthanekar@gmail.com
                  </a>
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+919665042152" className="text-green-600 hover:underline">
                    +91 9665042152
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 bg-white border-t shadow-lg">
        <p className="text-xs text-gray-500">© 2024 LeafoDrone. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-600 hover:text-green-600 hover:underline underline-offset-4"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-600 hover:text-green-600 hover:underline underline-offset-4"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
