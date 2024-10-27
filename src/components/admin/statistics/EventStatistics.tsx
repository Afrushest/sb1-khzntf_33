import React from 'react';
import { Users, Clock, BarChart2, Calendar } from 'lucide-react';

interface EventStats {
  totalRegistrations: number;
  confirmedRegistrations: number;
  waitlistRegistrations: number;
  averageAttendanceTime: string;
  participationRate: number;
  topCountries: Array<{ country: string; count: number }>;
  registrationsByDate: Array<{ date: string; count: number }>;
}

const EventStatistics = () => {
  // Sample data - replace with actual data
  const stats: EventStats = {
    totalRegistrations: 150,
    confirmedRegistrations: 120,
    waitlistRegistrations: 30,
    averageAttendanceTime: '1h 45m',
    participationRate: 85,
    topCountries: [
      { country: 'Tunisia', count: 45 },
      { country: 'Algeria', count: 35 },
      { country: 'Morocco', count: 25 },
      { country: 'Libya', count: 15 }
    ],
    registrationsByDate: [
      { date: '2024-03-01', count: 10 },
      { date: '2024-03-02', count: 15 },
      { date: '2024-03-03', count: 20 }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-linsoft-red" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Registrations</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalRegistrations}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Confirmed</span>
              <span className="text-gray-900">{stats.confirmedRegistrations}</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-500">Waitlist</span>
              <span className="text-gray-900">{stats.waitlistRegistrations}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <Clock className="h-10 w-10 text-linsoft-red" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Average Attendance Time</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.averageAttendanceTime}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <BarChart2 className="h-10 w-10 text-linsoft-red" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Participation Rate</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.participationRate}%</p>
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-linsoft-red rounded-full"
              style={{ width: `${stats.participationRate}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <Calendar className="h-10 w-10 text-linsoft-red" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Registration Trend</p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.registrationsByDate[stats.registrationsByDate.length - 1].count}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-end space-x-1 h-16">
              {stats.registrationsByDate.map((day, index) => (
                <div
                  key={day.date}
                  className="flex-1 bg-red-100 rounded-t"
                  style={{
                    height: `${(day.count / Math.max(...stats.registrationsByDate.map(d => d.count))) * 100}%`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-4">
              {stats.topCountries.map((country) => (
                <div key={country.country}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{country.country}</span>
                    <span className="text-gray-900">{country.count}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-linsoft-red rounded-full"
                      style={{
                        width: `${(country.count / stats.totalRegistrations) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* Add a map visualization here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventStatistics;