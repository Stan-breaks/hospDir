// src/app/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SearchIcon,
  Hospital,
  UserCheck,
  Star,
  Calendar,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from 'next/router'

const features = [
  {
    icon: <Hospital className="h-12 w-12 text-blue-500" />,
    title: "Find Hospitals",
    description:
      "Browse through verified hospitals across Kenya, complete with ratings and facilities information.",
  },
  {
    icon: <UserCheck className="h-12 w-12 text-blue-500" />,
    title: "Verified Doctors",
    description:
      "Access profiles of qualified healthcare professionals with verified credentials and specializations.",
  },
  {
    icon: <Star className="h-12 w-12 text-blue-500" />,
    title: "Patient Reviews",
    description:
      "Read authentic reviews from real patients to make informed healthcare decisions.",
  },
  {
    icon: <Calendar className="h-12 w-12 text-blue-500" />,
    title: "Easy Appointments",
    description:
      "Book appointments with your chosen healthcare providers seamlessly.",
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-500" />,
    title: "Verified Information",
    description:
      "All hospital and doctor information is verified for accuracy and reliability.",
  },
  {
    icon: <SearchIcon className="h-12 w-12 text-blue-500" />,
    title: "Smart Search",
    description:
      "Find healthcare providers by location, specialization, or ratings.",
  },
];

export default function LandingPage() {
  const router = useRouter();

  // Separate component for navigation buttons to reduce code duplication
  const NavigationButton = ({ href, variant = "default", children }) => (
    <Link href={href}>
      <Button
        size="lg"
        variant={variant}
        className={variant === "default" ? "bg-blue-600 hover:bg-blue-700" : ""}
      >
        {children}
      </Button>
    </Link>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find the Best Healthcare in Kenya
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Make informed decisions about your healthcare with verified
              hospital ratings and doctor reviews all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavigationButton href="/register">Get Started</NavigationButton>
              <NavigationButton href="/book" variant="outline">
                Search Hospitals
              </NavigationButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Kenya Healthcare Portal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Start Your Healthcare Journey
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search for hospitals or doctors..."
                  className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link href="/book">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <SearchIcon className="mr-2 h-4 w-4" /> Search
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Kenya&apos;s Leading Healthcare Platform
          </h2>
          <p className="text-xl mb-8">
            Register now to access verified healthcare information and make
            informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavigationButton href="/register" variant="secondary">
              Register as a Patient
            </NavigationButton>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Register as a Healthcare Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/register" className="hover:text-white">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Patients</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/book" className="hover:text-white">
                    Find Hospitals
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Find Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Write a Review
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                For Healthcare Providers
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/register" className="hover:text-white">
                    Join as a Doctor
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Register Hospital
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/register" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="hover:text-white">
                    Give Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2024 Kenya Healthcare Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
