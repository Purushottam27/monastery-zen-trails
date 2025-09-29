import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Image, 
  FileText, 
  Download,
  Eye,
  Heart,
  Share2,
  Calendar,
  MapPin,
  Layers,
  Grid3X3,
  List,
  Sparkles
} from "lucide-react";

const DigitalArchives = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedItem, setSelectedItem] = useState(null);

  const archiveItems = [
    {
      id: 1,
      title: "Ancient Tibetan Manuscript",
      monastery: "Pemayangtse Monastery",
      type: "manuscript",
      period: "16th Century",
      description: "Rare Buddhist text on meditation practices written in gold ink",
      image: "/manuscript-1.jpg",
      tags: ["Buddhism", "Meditation", "Tibetan", "Ancient"],
      language: "Classical Tibetan",
      condition: "Excellent",
      digitizedDate: "2023-08-15",
      isFavorite: false,
      viewCount: 1247
    },
    {
      id: 2,
      title: "Monastery Foundation Murals",
      monastery: "Rumtek Monastery",
      type: "mural",
      period: "18th Century",
      description: "Detailed wall paintings depicting the founding story of the monastery",
      image: "/mural-1.jpg",
      tags: ["Art", "History", "Founding", "Murals"],
      language: "Visual Art",
      condition: "Good",
      digitizedDate: "2023-09-20",
      isFavorite: true,
      viewCount: 892
    },
    {
      id: 3,
      title: "Ritual Dance Handbook",
      monastery: "Tashiding Monastery",
      type: "document",
      period: "17th Century",
      description: "Complete guide to sacred Cham dance performances and their meanings",
      image: "/document-1.jpg",
      tags: ["Dance", "Ritual", "Performance", "Sacred"],
      language: "Tibetan",
      condition: "Fair",
      digitizedDate: "2023-07-10",
      isFavorite: false,
      viewCount: 634
    },
    {
      id: 4,
      title: "Thangka Painting - Green Tara",
      monastery: "Enchey Monastery",
      type: "thangka",
      period: "19th Century",
      description: "Exquisite thangka painting of Green Tara, goddess of compassion",
      image: "/thangka-1.jpg",
      tags: ["Thangka", "Green Tara", "Goddess", "Compassion"],
      language: "Visual Art",
      condition: "Excellent",
      digitizedDate: "2023-10-05",
      isFavorite: true,
      viewCount: 2156
    },
    {
      id: 5,
      title: "Monastery Chronicle",
      monastery: "Pemayangtse Monastery",
      type: "chronicle",
      period: "Multiple Periods",
      description: "Historical records spanning 300 years of monastery events and lineages",
      image: "/chronicle-1.jpg",
      tags: ["History", "Chronicle", "Lineage", "Records"],
      language: "Tibetan & English",
      condition: "Good",
      digitizedDate: "2023-06-30",
      isFavorite: false,
      viewCount: 445
    },
    {
      id: 6,
      title: "Prayer Wheel Inscriptions",
      monastery: "Rumtek Monastery",
      type: "inscription",
      period: "15th Century",
      description: "Sacred mantras and prayers carved on ancient prayer wheels",
      image: "/inscription-1.jpg",
      tags: ["Prayer", "Mantra", "Inscription", "Sacred"],
      language: "Sanskrit & Tibetan",
      condition: "Fair",
      digitizedDate: "2023-11-12",
      isFavorite: false,
      viewCount: 789
    }
  ];

  const filters = [
    { id: "all", label: "All Items", icon: Layers, count: archiveItems.length },
    { id: "manuscript", label: "Manuscripts", icon: BookOpen, count: archiveItems.filter(i => i.type === "manuscript").length },
    { id: "mural", label: "Murals", icon: Image, count: archiveItems.filter(i => i.type === "mural").length },
    { id: "document", label: "Documents", icon: FileText, count: archiveItems.filter(i => i.type === "document").length },
    { id: "thangka", label: "Thangkas", icon: Image, count: archiveItems.filter(i => i.type === "thangka").length }
  ];

  const filteredItems = archiveItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.monastery.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === "all" || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const toggleFavorite = (itemId) => {
    // This would normally update the backend
    console.log(`Toggling favorite for item ${itemId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-monastery bg-clip-text text-transparent mb-4">
            Digital Archives
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore thousands of digitized manuscripts, murals, and historical documents from Sikkim's monasteries
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search archives by title, monastery, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "monastery" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="whitespace-nowrap"
                >
                  <Icon className="w-4 h-4 mr-1" />
                  {filter.label} ({filter.count})
                </Button>
              );
            })}
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "monastery" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "monastery" : "outline"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* AI-Powered Search Suggestion */}
        <Card className="p-4 mb-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <div>
              <h3 className="font-medium text-sm">AI-Powered Search</h3>
              <p className="text-xs text-muted-foreground">
                Try searching "meditation texts from 16th century" or "Green Tara paintings"
              </p>
            </div>
          </div>
        </Card>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredItems.length} results {searchTerm && `for "${searchTerm}"`}
          </p>
        </div>

        {/* Archive Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group cursor-pointer hover:shadow-monastery transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-incense-smoke to-background relative overflow-hidden rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-monastery opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {item.type === "manuscript" && <BookOpen className="w-12 h-12 text-primary mx-auto mb-2" />}
                      {item.type === "mural" && <Image className="w-12 h-12 text-primary mx-auto mb-2" />}
                      {item.type === "document" && <FileText className="w-12 h-12 text-primary mx-auto mb-2" />}
                      {item.type === "thangka" && <Image className="w-12 h-12 text-primary mx-auto mb-2" />}
                      {item.type === "chronicle" && <BookOpen className="w-12 h-12 text-primary mx-auto mb-2" />}
                      {item.type === "inscription" && <FileText className="w-12 h-12 text-primary mx-auto mb-2" />}
                      <p className="text-xs text-muted-foreground">{item.type.toUpperCase()}</p>
                    </div>
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-8 h-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(item.id);
                      }}
                    >
                      <Heart className={`w-4 h-4 ${item.isFavorite ? 'fill-current text-red-500' : ''}`} />
                    </Button>
                    <Button variant="secondary" size="sm" className="w-8 h-8 p-0">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm line-clamp-2 flex-1">{item.title}</h3>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {item.monastery}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs px-2 py-0">
                        {tag}
                      </Badge>
                    ))}
                    {item.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs px-2 py-0">
                        +{item.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button variant="monastery" size="sm">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3" />
                      </Button>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.viewCount} views</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-monastery transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-monastery rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.type === "manuscript" && <BookOpen className="w-8 h-8 text-primary-foreground" />}
                    {item.type === "mural" && <Image className="w-8 h-8 text-primary-foreground" />}
                    {item.type === "document" && <FileText className="w-8 h-8 text-primary-foreground" />}
                    {item.type === "thangka" && <Image className="w-8 h-8 text-primary-foreground" />}
                    {item.type === "chronicle" && <BookOpen className="w-8 h-8 text-primary-foreground" />}
                    {item.type === "inscription" && <FileText className="w-8 h-8 text-primary-foreground" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(item.id)}
                        >
                          <Heart className={`w-4 h-4 ${item.isFavorite ? 'fill-current text-red-500' : ''}`} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.monastery}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <div>{item.viewCount} views</div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="monastery" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalArchives;