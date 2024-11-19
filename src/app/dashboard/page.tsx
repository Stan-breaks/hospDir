"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Bell,
  FileText,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  // Dummy data for demonstration
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2024-11-20",
      time: "10:00 AM",
      hospital: "Nairobi General Hospital",
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "2024-11-22",
      time: "2:30 PM",
      hospital: "Kenya Medical Center",
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Appointment Reminder",
      message: "Your appointment with Dr. Johnson is tomorrow at 10:00 AM",
      time: "1 hour ago",
    },
    {
      id: 2,
      title: "New Message",
      message: "Dr. Chen has sent you a message regarding your last visit",
      time: "2 hours ago",
    },
  ];

  const healthMetrics = {
    bloodPressure: "120/80",
    heartRate: "72 bpm",
    weight: "70 kg",
    lastUpdated: "2024-11-18",
  };

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.email}
        </h1>
        <p className="text-gray-600">
          Here&apos;s an overview of your healthcare information
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <a href="/book">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Book Appointment</h3>
                  <p className="text-sm text-gray-600">Schedule a new visit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="/book">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <FileText className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Medical Records</h3>
                  <p className="text-sm text-gray-600">View your history</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
        <a href="/book">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Users className="h-10 w-10 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold">Find Doctor</h3>
                  <p className="text-sm text-gray-600">Search specialists</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled medical visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <CalendarIcon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        {appointment.doctorName}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {appointment.specialty}
                      </p>
                      <p className="text-sm text-gray-600">
                        {appointment.hospital}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{appointment.date}</p>
                    <p className="text-sm text-gray-600">{appointment.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Health Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Health Metrics</CardTitle>
            <CardDescription>
              Last updated: {healthMetrics.lastUpdated}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Blood Pressure</span>
                <span className="font-semibold">
                  {healthMetrics.bloodPressure}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Heart Rate</span>
                <span className="font-semibold">{healthMetrics.heartRate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Weight</span>
                <span className="font-semibold">{healthMetrics.weight}</span>
              </div>
              <Button className="w-full mt-4">Update Metrics</Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Your latest updates and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Bell className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{notification.title}</h4>
                      <p className="text-sm text-gray-600">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
