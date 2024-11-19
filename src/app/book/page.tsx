"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Hospital, MapPin, Star, Clock } from "lucide-react";
import { hospitals, generateTimeSlots } from "@/lib/dummyData";

export default function HospitalSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter hospitals based on search term
  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const handleBookAppointment = (timeSlot) => {
    // Simulate booking appointment
    setTimeout(() => {
      setBookingSuccess(true);
      setTimeout(() => {
        setSelectedHospital(null);
        setBookingSuccess(false);
      }, 2000);
    }, 500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Input */}
      <div className="mb-8">
        <Input
          placeholder="Search hospitals by name, location, or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-2xl mx-auto"
        />
      </div>

      {/* Hospital Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHospitals.map((hospital) => (
          <Card key={hospital.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{hospital.name}</span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span>{hospital.rating}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{hospital.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hospital.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => setSelectedHospital(hospital)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Book Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Book Appointment at {selectedHospital.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {bookingSuccess ? (
                <div className="text-center py-8">
                  <h3 className="text-xl text-green-600 font-semibold mb-2">
                    Appointment Booked Successfully!
                  </h3>
                  <p className="text-gray-600">
                    You will receive a confirmation email shortly.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">Select Date</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Available Time Slots</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {generateTimeSlots().map((slot) => (
                        <Button
                          key={slot}
                          variant="outline"
                          onClick={() => handleBookAppointment(slot)}
                          disabled={!selectedDate}
                          className="flex items-center justify-center"
                        >
                          <Clock className="h-4 w-4 mr-2" />
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-6 flex justify-end space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setSelectedHospital(null)}
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
