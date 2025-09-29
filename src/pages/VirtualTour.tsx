import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize, 
  Volume2, 
  VolumeX,
  MapPin,
  Clock,
  Users
} from "lucide-react";
import monasteryInterior from "@/assets/monastery-interior.jpg";

const VirtualTour = () => {
  const { monasteryId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const monasteries = [
    {
      id: "rumtek",
      name: "Rumtek Monastery",
      location: "East Sikkim",
      description: "The largest monastery in Sikkim, seat of the Kagyu lineage",
      scenes: ["Main Hall", "Prayer Wheels", "Golden Stupa", "Courtyard", "Monks' Quarters"],
      duration: "45 minutes",
      visitors: "1.2k today"
    },
    {
      id: "pemayangtse",
      name: "Pemayangtse Monastery",
      location: "West Sikkim", 
      description: "One of the oldest monasteries in Sikkim",
      scenes: ["Assembly Hall", "Sacred Relics", "Wooden Sculptures", "Mountain View"],
      duration: "35 minutes",
      visitors: "856 today"
    }
  ];

  const currentMonastery = monasteries.find(m => m.id === monasteryId) || monasteries[0];
  const scenes = currentMonastery.scenes;

  return (
    <div className="min-h-screen bg-background">
      {/* Virtual Tour Interface */}
      <div className="relative">
        {/* 360° Viewer */}
        <div className="relative h-[70vh] bg-gradient-to-b from-incense-smoke to-background overflow-hidden">
          <img 
            src={monasteryInterior}
            alt={`${currentMonastery.name} - ${scenes[currentScene]}`}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Controls */}
          <div className="absolute inset-0 bg-black/20">
            {/* Top Controls */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                <h1 className="text-2xl font-bold">{currentMonastery.name}</h1>
                <p className="text-sm opacity-90 flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4" />
                  {currentMonastery.location}
                </p>
                <p className="text-sm opacity-75 mt-2">{currentMonastery.description}</p>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-black/60 hover:bg-black/80 text-white border-white/20"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-black/60 hover:bg-black/80 text-white border-white/20"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="monastery"
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {isPlaying ? "Pause Tour" : "Start Tour"}
                    </Button>
                    <Button variant="outline" size="sm" className="text-white border-white/20">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset View
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentMonastery.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {currentMonastery.visitors}
                    </div>
                  </div>
                </div>

                {/* Scene Navigation */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {scenes.map((scene, index) => (
                    <Button
                      key={scene}
                      variant={currentScene === index ? "monastery" : "outline"}
                      size="sm"
                      onClick={() => setCurrentScene(index)}
                      className={currentScene !== index ? "text-white border-white/20 hover:bg-white/10" : ""}
                    >
                      <Camera className="w-3 h-3 mr-1" />
                      {scene}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Panel */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">About This Scene</h2>
                <p className="text-muted-foreground mb-6">
                  The {scenes[currentScene]} is one of the most sacred spaces in {currentMonastery.name}. 
                  This virtual tour allows you to explore intricate details of the architecture, 
                  artwork, and religious artifacts that make this monastery unique.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Historical Significance</h3>
                    <p className="text-sm text-muted-foreground">
                      Built in the 16th century, this monastery has been a center of Buddhist learning and practice.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Architectural Features</h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional Tibetan architecture with intricate woodwork and vibrant murals.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Architecture</Badge>
                  <Badge variant="secondary">Buddhist Art</Badge>
                  <Badge variant="secondary">Cultural Heritage</Badge>
                  <Badge variant="secondary">360° View</Badge>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Other Monasteries</h3>
                <div className="space-y-3">
                  {monasteries.filter(m => m.id !== currentMonastery.id).map((monastery) => (
                    <div 
                      key={monastery.id}
                      className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div>
                        <h4 className="font-medium text-sm">{monastery.name}</h4>
                        <p className="text-xs text-muted-foreground">{monastery.location}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Camera className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Visit Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Time:</span>
                    <span>Oct - Mar</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry Fee:</span>
                    <span>₹20 (Indians)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Photography:</span>
                    <span>Allowed</span>
                  </div>
                </div>
                <Button variant="monastery" className="w-full mt-4">
                  Plan Your Visit
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;