import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star,
  ChevronLeft,
  ChevronRight,
  Plus,
  Filter,
  Bell
} from "lucide-react";

const CulturalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState("month");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Losar Festival - Tibetan New Year",
      monastery: "Rumtek Monastery",
      date: "2024-02-10",
      startTime: "06:00",
      endTime: "20:00",
      type: "festival",
      description: "The most important festival in the Tibetan calendar, celebrating the new year with traditional ceremonies, prayers, and cultural performances.",
      participants: 500,
      isBookable: true,
      isPaid: false,
      status: "upcoming",
      image: "/losar-festival.jpg",
      duration: "3 days",
      significance: "High",
      languages: ["Tibetan", "English"]
    },
    {
      id: 2,
      title: "Morning Prayer Ceremony",
      monastery: "Enchey Monastery",
      date: "2024-01-20",
      startTime: "05:30",
      endTime: "07:00",
      type: "daily_prayer",
      description: "Daily morning prayers and meditation session open to visitors",
      participants: 50,
      isBookable: true,
      isPaid: false,
      status: "recurring",
      image: "/morning-prayer.jpg",
      duration: "1.5 hours",
      significance: "Medium",
      languages: ["Tibetan"]
    },
    {
      id: 3,
      title: "Saga Dawa Festival",
      monastery: "Pemayangtse Monastery",
      date: "2024-05-23",
      startTime: "04:00",
      endTime: "18:00",
      type: "festival",
      description: "Celebrating the birth, enlightenment, and death of Buddha with special prayers and offerings",
      participants: 300,
      isBookable: true,
      isPaid: true,
      status: "upcoming",
      image: "/saga-dawa.jpg",
      duration: "Full day",
      significance: "High",
      languages: ["Tibetan", "English", "Hindi"]
    },
    {
      id: 4,
      title: "Cham Dance Performance",
      monastery: "Tashiding Monastery",
      date: "2024-03-15",
      startTime: "10:00",
      endTime: "16:00",
      type: "performance",
      description: "Traditional masked dance performance depicting the victory of good over evil",
      participants: 200,
      isBookable: true,
      isPaid: true,
      status: "upcoming",
      image: "/cham-dance.jpg",
      duration: "6 hours",
      significance: "High",
      languages: ["Visual Performance"]
    },
    {
      id: 5,
      title: "Meditation Retreat",
      monastery: "Rumtek Monastery",
      date: "2024-04-01",
      startTime: "09:00",
      endTime: "17:00",
      type: "retreat",
      description: "3-day intensive meditation retreat for practitioners of all levels",
      participants: 30,
      isBookable: true,
      isPaid: true,
      status: "booking_open",
      image: "/meditation-retreat.jpg",
      duration: "3 days",
      significance: "Medium",
      languages: ["English", "Tibetan"]
    }
  ];

  const eventTypes = [
    { id: "all", label: "All Events", color: "bg-gray-500" },
    { id: "festival", label: "Festivals", color: "bg-red-500" },
    { id: "daily_prayer", label: "Daily Prayers", color: "bg-blue-500" },
    { id: "performance", label: "Performances", color: "bg-green-500" },
    { id: "retreat", label: "Retreats", color: "bg-purple-500" }
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = events.filter(event => 
    activeFilter === "all" || event.type === activeFilter
  );

  const getEventTypeColor = (type) => {
    const eventType = eventTypes.find(t => t.id === type);
    return eventType ? eventType.color : "bg-gray-500";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-monastery bg-clip-text text-transparent mb-4">
            Cultural Calendar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and participate in festivals, rituals, and cultural events across Sikkim's monasteries
          </p>
        </div>

        {/* Calendar Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <h2 className="text-xl font-semibold">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {["month", "week", "list"].map((view) => (
                <Button
                  key={view}
                  variant={selectedView === view ? "monastery" : "outline"}
                  size="sm"
                  onClick={() => setSelectedView(view)}
                >
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </Button>
              ))}
            </div>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {eventTypes.map((type) => (
            <Button
              key={type.id}
              variant={activeFilter === type.id ? "monastery" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(type.id)}
              className="whitespace-nowrap"
            >
              <div className={`w-3 h-3 rounded-full ${type.color} mr-2`} />
              {type.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <Card 
                  key={event.id} 
                  className="overflow-hidden hover:shadow-monastery transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex">
                    {/* Date Column */}
                    <div className="w-24 bg-gradient-monastery text-primary-foreground p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs uppercase">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {event.monastery}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {event.startTime} - {event.endTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {event.participants} expected
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)}`} />
                          {event.significance === "High" && (
                            <div className="flex gap-1">
                              <Star className="w-4 h-4 fill-current text-yellow-500" />
                              <Star className="w-4 h-4 fill-current text-yellow-500" />
                              <Star className="w-4 h-4 fill-current text-yellow-500" />
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <Badge 
                            variant={event.status === "upcoming" ? "default" : 
                                   event.status === "recurring" ? "secondary" : "outline"}
                          >
                            {event.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <Badge variant="outline">
                            {event.duration}
                          </Badge>
                          {event.isPaid && (
                            <Badge variant="destructive">
                              Paid Event
                            </Badge>
                          )}
                        </div>

                        {event.isBookable && (
                          <Button variant="monastery" size="sm">
                            <Plus className="w-4 h-4 mr-2" />
                            Book Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Event Details */}
            {selectedEvent && (
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-lg">{selectedEvent.title}</h4>
                    <p className="text-sm text-muted-foreground">{selectedEvent.monastery}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <p className="font-medium">{formatDate(selectedEvent.date)}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Time:</span>
                      <p className="font-medium">{selectedEvent.startTime} - {selectedEvent.endTime}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-medium">{selectedEvent.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expected:</span>
                      <p className="font-medium">{selectedEvent.participants} people</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-muted-foreground text-sm">Languages:</span>
                    <div className="flex gap-1 mt-1">
                      {selectedEvent.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {selectedEvent.description}
                  </p>

                  {selectedEvent.isBookable && (
                    <div className="pt-4 border-t">
                      <Button variant="monastery" className="w-full">
                        {selectedEvent.isPaid ? "Book & Pay" : "Reserve Spot"}
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {selectedEvent.isPaid ? "Payment required for confirmation" : "Free event - reserve your spot"}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Events:</span>
                  <span className="font-medium">{events.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Festivals:</span>
                  <span className="font-medium">{events.filter(e => e.type === "festival").length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Free Events:</span>
                  <span className="font-medium">{events.filter(e => !e.isPaid).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Available Spots:</span>
                  <span className="font-medium">{events.reduce((sum, e) => sum + e.participants, 0)}</span>
                </div>
              </div>
            </Card>

            {/* Featured Event */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
              <h3 className="font-semibold mb-4">Featured Event</h3>
              <div className="text-center">
                <h4 className="font-medium mb-2">Losar Festival</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  The biggest celebration of the year is coming up!
                </p>
                <Button variant="monastery" size="sm">
                  Learn More
                </Button>
              </div>
            </Card>

            {/* Subscription */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get notified about upcoming festivals and events
              </p>
              <Button variant="outline" className="w-full">
                <Bell className="w-4 h-4 mr-2" />
                Subscribe to Alerts
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalCalendar;