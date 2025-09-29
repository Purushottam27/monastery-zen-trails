import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Download,
  Headphones,
  Globe,
  MapPin,
  Clock,
  User,
  Bluetooth,
  Wifi,
  WifiOff
} from "lucide-react";

const AudioGuide = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState([75]);
  const [currentTime, setCurrentTime] = useState([120]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOfflineMode, setIsOfflineMode] = useState(false);

  const audioGuides = [
    {
      id: 1,
      title: "Introduction to Rumtek Monastery",
      monastery: "Rumtek Monastery",
      narrator: "Lama Tenzin",
      duration: "8:45",
      language: "English",
      description: "Welcome to the spiritual heart of Sikkim. Learn about the history and significance of Rumtek.",
      category: "Introduction",
      isDownloaded: true
    },
    {
      id: 2,
      title: "The Golden Stupa - Sacred Architecture",
      monastery: "Rumtek Monastery",
      narrator: "Dr. Pemba Sherpa",
      duration: "12:30",
      language: "English",
      description: "Explore the intricate details of the golden stupa and its symbolic meanings.",
      category: "Architecture",
      isDownloaded: true
    },
    {
      id: 3,
      title: "Daily Life of Monks",
      monastery: "Rumtek Monastery",
      narrator: "Monk Lobsang",
      duration: "15:20",
      language: "English",
      description: "Experience a day in the life of Buddhist monks through their own voices.",
      category: "Culture",
      isDownloaded: false
    },
    {
      id: 4,
      title: "Prayer Wheels and Their Significance",
      monastery: "Enchey Monastery",
      narrator: "Ani Dolma",
      duration: "6:15",
      language: "English",
      description: "Understanding the spiritual practice of prayer wheels and mantras.",
      category: "Spirituality",
      isDownloaded: true
    }
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ne", name: "नेपाली", flag: "🇳🇵" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "bo", name: "བོད་སྐད་", flag: "🏔️" },
    { code: "si", name: "සිංහල", flag: "🇱🇰" }
  ];

  const currentGuide = audioGuides[currentTrack];
  const totalDuration = 525; // 8:45 in seconds

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-monastery bg-clip-text text-transparent mb-4">
            Smart Audio Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Location-based audio guides in multiple languages with offline support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Audio Player */}
          <div className="lg:col-span-2">
            <Card className="p-8 mb-6">
              {/* Current Track Info */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-monastery rounded-lg flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-12 h-12 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{currentGuide.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {currentGuide.monastery}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {currentGuide.narrator}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {currentGuide.duration}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{currentGuide.description}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="secondary">{currentGuide.category}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {currentGuide.language}
                    </Badge>
                    {currentGuide.isDownloaded && (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        Downloaded
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <Slider
                  value={currentTime}
                  onValueChange={setCurrentTime}
                  max={totalDuration}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>{Math.floor(currentTime[0] / 60)}:{(currentTime[0] % 60).toString().padStart(2, '0')}</span>
                  <span>{currentGuide.duration}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mb-6">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
                  disabled={currentTrack === 0}
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                
                <Button
                  variant="monastery"
                  size="xl"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentTrack(Math.min(audioGuides.length - 1, currentTrack + 1))}
                  disabled={currentTrack === audioGuides.length - 1}
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-4">
                <Volume2 className="w-5 h-5 text-muted-foreground" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground w-12">{volume[0]}%</span>
              </div>
            </Card>

            {/* Connection Status */}
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {isOfflineMode ? (
                      <WifiOff className="w-5 h-5 text-orange-500" />
                    ) : (
                      <Wifi className="w-5 h-5 text-green-500" />
                    )}
                    <span className="font-medium">
                      {isOfflineMode ? "Offline Mode" : "Connected"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bluetooth className="w-4 h-4" />
                    <span>Bluetooth Beacons Active</span>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsOfflineMode(!isOfflineMode)}
                >
                  {isOfflineMode ? "Go Online" : "Go Offline"}
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Language Selection */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Choose Language</h3>
              <div className="grid grid-cols-1 gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "monastery" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="justify-start"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Track List */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Audio Guides</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {audioGuides.map((guide, index) => (
                  <div
                    key={guide.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                      currentTrack === index ? 'bg-primary/10 border-primary' : ''
                    }`}
                    onClick={() => setCurrentTrack(index)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm line-clamp-2">{guide.title}</h4>
                      <div className="flex items-center gap-1 ml-2">
                        {guide.isDownloaded ? (
                          <Download className="w-3 h-3 text-green-500" />
                        ) : (
                          <Download className="w-3 h-3 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{guide.monastery}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {guide.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{guide.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Download Options */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Offline Downloads</h3>
              <div className="space-y-3">
                <Button variant="monastery" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download All Guides
                </Button>
                <p className="text-xs text-muted-foreground">
                  Download guides for offline access in remote monastery locations
                </p>
                <div className="text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Downloaded:</span>
                    <span>3 of 4 guides</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Storage used:</span>
                    <span>45 MB</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Features */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>GPS-triggered audio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Bluetooth beacon support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Offline mode</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Multi-language support</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioGuide;