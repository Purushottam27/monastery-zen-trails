import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  MapPin, 
  Headphones, 
  BookOpen, 
  Calendar, 
  Play,
  ArrowRight,
  Globe,
  Users,
  Star,
  Mountain,
  Heart,
  Wifi,
  Download
} from "lucide-react";
import monasteryHero from "@/assets/monastery-hero.jpg";
import prayerFlags from "@/assets/prayer-flags.jpg";
import monasteryInterior from "@/assets/monastery-interior.jpg";

const Index = () => {
  const features = [
    {
      title: "Virtual Tours",
      description: "Experience 360° panoramic views of monastery interiors with immersive walkthroughs",
      icon: Camera,
      href: "/virtual-tour",
      color: "from-blue-500 to-cyan-500",
      stats: "200+ Monasteries",
      features: ["360° Views", "HD Quality", "Multiple Angles"]
    },
    {
      title: "Interactive Map",
      description: "Explore geo-tagged locations with travel routes and nearby attractions",
      icon: MapPin,
      href: "/map",
      color: "from-green-500 to-emerald-500",
      stats: "25+ Locations",
      features: ["GPS Routes", "Local Transport", "Travel Tips"]
    },
    {
      title: "Smart Audio Guide",
      description: "Location-based audio guides in multiple languages with offline support",
      icon: Headphones,
      href: "/audio-guide",
      color: "from-purple-500 to-violet-500",
      stats: "5 Languages",
      features: ["Offline Mode", "GPS Triggered", "Native Voices"]
    },
    {
      title: "Digital Archives",
      description: "Scanned manuscripts, murals, and historical documents with AI-powered search",
      icon: BookOpen,
      href: "/archives",
      color: "from-orange-500 to-red-500",
      stats: "1000+ Documents",
      features: ["AI Search", "HD Scans", "Historical Context"]
    },
    {
      title: "Cultural Calendar",
      description: "Schedule of festivals, rituals, and events with booking capabilities",
      icon: Calendar,
      href: "/calendar",
      color: "from-pink-500 to-rose-500",
      stats: "50+ Events/Year",
      features: ["Event Booking", "Notifications", "Festival Guide"]
    }
  ];

  const quickStats = [
    { label: "Monasteries", value: "25+", icon: Mountain },
    { label: "Virtual Tours", value: "15", icon: Camera },
    { label: "Languages", value: "5", icon: Globe },
    { label: "Visitors", value: "10K+", icon: Users }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Cultural Enthusiast",
      content: "The virtual tours are absolutely stunning. I felt like I was actually walking through these sacred spaces.",
      rating: 5,
      avatar: "🧘‍♀️"
    },
    {
      name: "Tenzin Norbu",
      role: "Local Guide", 
      content: "This platform beautifully preserves our heritage. The audio guides in Tibetan are authentic and meaningful.",
      rating: 5,
      avatar: "🙏"
    },
    {
      name: "Dr. Maya Patel",
      role: "Buddhist Scholar",
      content: "The digital archives are a treasure trove. The AI search helps me find exactly what I need for my research.",
      rating: 5,
      avatar: "📚"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${monasteryHero})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Prayer Flags Decoration */}
        <div 
          className="absolute top-0 left-0 right-0 h-20 bg-repeat-x opacity-30 prayer-flag"
          style={{ backgroundImage: `url(${prayerFlags})`, backgroundSize: 'auto 100%' }}
        />

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-3 h-3 bg-primary rounded-full prayer-wheel" />
              <span className="text-sm">Digital Heritage Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Sikkim's
              <span className="block bg-gradient-prayer-flags bg-clip-text text-transparent">
                Sacred Monasteries
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the spiritual heritage of the Himalayas through virtual tours, 
              interactive maps, and cultural events - all in one comprehensive platform
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="monastery" size="xl" asChild>
              <Link to="/virtual-tour">
                <Play className="w-5 h-5 mr-2" />
                Start Virtual Tour
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <MapPin className="w-5 h-5 mr-2" />
              Explore Map
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {quickStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-2 text-primary-glow" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Explore Our
              <span className="bg-gradient-monastery bg-clip-text text-transparent"> Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the rich cultural heritage of Sikkim's monasteries through cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="group hover:shadow-monastery transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{feature.stats}</Badge>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {feature.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feat}
                        </div>
                      ))}
                    </div>

                    <Button variant="monastery" className="w-full group" asChild>
                      <Link to={feature.href}>
                        Explore
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              What Visitors
              <span className="bg-gradient-monastery bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied visitors who have experienced Sikkim's monasteries through our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-monastery transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-monastery flex items-center justify-center text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Built for
                <span className="bg-gradient-monastery bg-clip-text text-transparent"> Modern Exploration</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our platform combines traditional wisdom with cutting-edge technology to create an unparalleled cultural experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Offline Capability</h3>
                    <p className="text-muted-foreground">Access content even in remote monastery locations without internet connectivity.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Multi-Language Support</h3>
                    <p className="text-muted-foreground">Experience content in English, Nepali, Hindi, Tibetan, and Sinhala languages.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cultural Preservation</h3>
                    <p className="text-muted-foreground">Digitally preserving sacred texts, artwork, and traditions for future generations.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="monastery" size="lg" asChild>
                  <Link to="/virtual-tour">
                    Start Exploring
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={monasteryInterior}
                alt="Monastery Interior"
                className="rounded-2xl shadow-mountain"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">Immersive Experience</h3>
                <p className="text-sm opacity-90">Step inside sacred spaces from anywhere in the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-monastery text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Begin Your Spiritual Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover the timeless wisdom and beauty of Sikkim's monasteries. 
            Start exploring today and connect with centuries of Buddhist heritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="golden" size="xl" asChild>
              <Link to="/virtual-tour">
                <Camera className="w-5 h-5 mr-2" />
                Take Virtual Tour
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
