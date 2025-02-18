"use client"

import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import AttackLocationMap from "./Dashboard/Components/maps";
const chartData = [
  { time: "01:00", value: 0 },
  { time: "02:00", value: 5 },
  { time: "03:00", value: 10 },
  { time: "04:00", value: 15 },
  { time: "05:00", value: 20 },
  { time: "07:00", value: 19 },
  { time: "08:00", value: 16 },
  { time: "09:00", value: 12 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
}

export default function Dashboard() {
  const [date, setDate] = useState({
    from: '',
    to: '',
  })
  const handleChange = (e) => {
    setDate(e);
  };
  const getLogs = () => {
    const currentDate = new Date();
    const oneWeekAgo = new Date(currentDate);
    oneWeekAgo.setDate(currentDate.getDate() - 7);
    currentDate.setHours(0, 0, 0, 0);
    oneWeekAgo.setHours(0, 0, 0, 0);
    setDate({
      from: oneWeekAgo.toString(),
      to: currentDate.toString()
    });

  }

  useEffect(() => {
    getLogs();
  }, []);
  const callStatsData = [
    { label: "Robo Calls", value: 600 },
    { label: "Alerts", value: 8900 },
    { label: "Fraud", value: 9500 },
    { label: "BlackListed", value: 850 },
    { label: "Countries Called", value: 500 },
    { label: "International Forwarding", value: 600 },
  ];

  const data = [
    { label: 'India', value: 50000 },
    { label: 'USA', value: 35000 },
    { label: 'Brazil', value: 10000 },
    { label: 'Other', value: 5000 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const countries = [
    {
      name: 'India',
      value: 50,
      flag: '🇮🇳',
      color: '#0088FE',
    },
    {
      name: 'USA',
      value: 35,
      flag: 'Us',
      color: '#00C49F',
    },
    {
      name: 'Brazil',
      value: 10,
      flag: 'br',
      color: '#FFBB28',
    },
    {
      name: 'Other',
      value: 5,
      flag: 'other',
      color: '#FF8042',
    },
  ];

  return (
    <div>
      {/* Chart 1 */}
      <div className="p-2">
        <Card>
          <CardHeader className='p-4 flex justify-between items-center flex-row'>
            <CardTitle className='font-semibold text-2xl'>Call Stats</CardTitle>
            <div>
              <div className={cn("grid gap-2",)}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[300px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
              {callStatsData.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[grey]">{stat.label}</p>
                  <p className="text-2xl  font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className='font-semibold text-2xl py-2 px-4'>Sessions</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          <Card>
            <CardHeader className='p-4 flex justify-between items-center flex-row'>
              <CardTitle className='font-semibold'>Active Calls</CardTitle>
              <p className="text-2xl font-bold">150</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    tickMargin={10} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>

          </Card>
          <Card>
            <CardHeader className='p-4 flex justify-between items-center flex-row'>
              <CardTitle className='font-semibold'>Active Registrations</CardTitle>
              <p className="text-2xl font-bold">130</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    tickMargin={10} />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-6 py-4">
          <Card className="col-span-1">
            <CardHeader className='p-4 flex justify-between items-center flex-row'>
              <CardTitle className='font-semibold'>UC Services and System Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={60}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div>
                {countries.map((country, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 'bold' }}>{country.name}</span>
                    </div>
                    <Progress
                      value={country.value}
                      style={{ '--progress-color': country.color }}
                      className="progress-bar"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2  w-full">
            <CardHeader className='p-4 flex justify-between items-center flex-row'>
              <CardTitle className='font-semibold'>Attack Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <AttackLocationMap />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}