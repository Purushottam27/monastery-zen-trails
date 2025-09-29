import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Navigation, 
  Filter, 
  Search, 
  Clock, 
  Star,
  Camera,
  Route,
  Info
} from "lucide-react";

const InteractiveMap = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const monasteries = [
    {
      id: 1,
      name: "Rumtek Monastery",
      location: "East Sikkim",
      coordinates: { lat: 27.3389, lng: 88.5698 },
      rating: 4.8,
      difficulty: "Easy",
      distance: "24 km from Gangtok",
      description: "The largest monastery in Sikkim and the main seat of the Kagyu lineage",
      image: "/monastery-1.jpg",
      category: "major",
      visitDuration: "2-3 hours",
      nearbyAttractions: ["Gangtok", "Banjhakri Falls", "Tsomgo Lake"]
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      coordinates: { lat: 27.2046, lng: 88.2079 },
      rating: 4.6,
      difficulty: "Moderate",
      distance: "110 km from Gangtok",
      description: "One of the oldest and most important monasteries in Sikkim",
      image: "/monastery-2.jpg",
      category: "historical",
      visitDuration: "1-2 hours",
      nearbyAttractions: ["Pelling", "Rabdentse Ruins", "Khecheopalri Lake"]
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      location: "West Sikkim",
      coordinates: { lat: 27.3167, lng: 88.2667 },
      rating: 4.7,
      difficulty: "Hard",
      distance: "40 km from Pelling",
      description: "Sacred monastery between two rivers with mystical significance",
      image: "/monastery-3.jpg",
      category: "sacred",
      visitDuration: "1-2 hours",
      nearbyAttractions: ["Yuksom", "Dubdi Monastery"]
    },
    {
      id: 4,
      name: "Enchey Monastery",
      location: "East Sikkim",
      coordinates: { lat: 27.3389, lng: 88.6198 },
      rating: 4.5,
      difficulty: "Easy",
      distance: "3 km from Gangtok",
      description: "Beautiful monastery with panoramic views of Gangtok",
      image: "/monastery-4.jpg",
      category: "major",
      visitDuration: "1 hour",
      nearbyAttractions: ["Gangtok City Center", "MG Marg", "Ridge Park"]
    }
  ];

  const filters = [
    { id: "all", label: "All Monasteries", count: monasteries.length },
    { id: "major", label: "Major Sites", count: monasteries.filter(m => m.category === "major").length },
    { id: "historical", label: "Historical", count: monasteries.filter(m => m.category === "historical").length },
    { id: "sacred", label: "Sacred Sites", count: monasteries.filter(m => m.category === "sacred").length }
  ];

  const filteredMonasteries = monasteries.filter(monastery => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || monastery.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-monastery bg-clip-text text-transparent mb-4">
            Interactive Monastery Map
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Sikkim's sacred monasteries with detailed locations, travel routes, and nearby attractions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search monasteries or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "monastery" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className="whitespace-nowrap"
              >
                <Filter className="w-4 h-4 mr-1" />
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] overflow-hidden">
              {/* Map Placeholder */}
              <div className="relative h-full bg-gradient-to-br from-mountain-blue/20 to-prayer.blue/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Click on monastery pins to explore details and plan your route
                  </p>
                  <Button variant="monastery">
                    <Navigation className="w-4 h-4 mr-2" />
                    View Full Map
                  </Button>
                </div>
                
                {/* Monastery Markers */}
                <div className="absolute inset-0">
                  {filteredMonasteries.map((monastery, index) => (
                    <div
                      key={monastery.id}
                      className={`absolute w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-monastery ${
                        selectedMonastery?.id === monastery.id ? 'ring-4 ring-primary-glow scale-125' : ''
                      }`}
                      style={{
                        left: `${20 + (index * 15)}%`,
                        top: `${30 + (index * 10)}%`
                      }}
                      onClick={() => setSelectedMonastery(monastery)}
                    >
                      <MapPin className="w-4 h-4 text-primary-foreground" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Monastery Details */}
            {selectedMonastery && (
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedMonastery.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {selectedMonastery.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{selectedMonastery.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {selectedMonastery.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Distance:</span>
                    <span>{selectedMonastery.distance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Visit Duration:</span>
                    <span>{selectedMonastery.visitDuration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <Badge variant={selectedMonastery.difficulty === 'Easy' ? 'secondary' : 
                                  selectedMonastery.difficulty === 'Moderate' ? 'outline' : 'default'}>
                      {selectedMonastery.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Nearby Attractions</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedMonastery.nearbyAttractions.map((attraction) => (
                      <Badge key={attraction} variant="outline" className="text-xs">
                        {attraction}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="monastery" size="sm" className="flex-1">
                    <Route className="w-4 h-4 mr-1" />
                    Get Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    <Camera className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Info className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            )}

            {/* Monastery List */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">
                All Monasteries ({filteredMonasteries.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredMonasteries.map((monastery) => (
                  <div
                    key={monastery.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                      selectedMonastery?.id === monastery.id ? 'bg-primary/10 border-primary' : ''
                    }`}
                    onClick={() => setSelectedMonastery(monastery)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{monastery.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-yellow-500" />
                        <span className="text-xs">{monastery.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{monastery.location}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {monastery.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {monastery.visitDuration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Travel Tips */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Travel Tips</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Best visited between October and March for clear mountain views
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Carry warm clothes as temperatures can drop suddenly
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Respect photography restrictions inside monastery halls
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;