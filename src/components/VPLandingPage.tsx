import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import heroImage from "@/assets/vp-pressure-hero.jpg";
import { ArrowDown, TrendingUp, Users, Target, Brain } from "lucide-react";

const VPLandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    teamSize: "",
    pressurePoints: [],
    leadershipVision: ""
  });

  const handlePressurePointChange = (point: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      pressurePoints: checked 
        ? [...prev.pressurePoints, point]
        : prev.pressurePoints.filter(p => p !== point)
    }));
  };

  const pressurePoints = [
    "Managing up to demanding executives",
    "Managing down to overwhelmed team members", 
    "No time for strategic thinking due to operational demands",
    "Being accountable for results I don't fully control"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-executive-red text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        
        {/* Pressure Arrows */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-leadership-gold animate-bounce">
          <ArrowDown size={48} />
          <div className="text-sm font-semibold mt-2">BOARD PRESSURE</div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-leadership-gold animate-bounce">
          <ArrowDown size={48} className="rotate-180" />
          <div className="text-sm font-semibold mt-2">TEAM DEMANDS</div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Board Wants Vision.<br />
                Team Needs Hand-Holding.<br />
                <span className="text-leadership-gold">You're Drowning in the Middle.</span>
              </h1>
              
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                You're the bridge between executive demands and team reality. 
                Everyone walks on you, but who supports you?
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-lg italic text-leadership-gold font-medium">
                  "When did being a leader become being everyone's solution but no one's priority?"
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="VP under pressure from executives and team"
                className="rounded-xl shadow-executive border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              The VP Sandwich That's <span className="text-executive-red">Crushing Your Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The impossible position that's burning out VP leaders across every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-executive-red" />,
                title: "CEO says 'make it happen'",
                subtitle: "while your team says 'we need more support'"
              },
              {
                icon: <Target className="w-8 h-8 text-executive-red" />,
                title: "Board presentation due Friday",
                subtitle: "team crisis happening now, only you to handle both"
              },
              {
                icon: <Brain className="w-8 h-8 text-executive-red" />,
                title: "Strategic initiatives keep dying",
                subtitle: "because you're buried in operational firefighting"
              },
              {
                icon: <Users className="w-8 h-8 text-executive-red" />,
                title: "You're accountable for results",
                subtitle: "but don't control all the variables to achieve them"
              }
            ].map((item, index) => (
              <Card key={index} className="border-primary/20 shadow-leadership hover:shadow-executive transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-executive-red/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        "{item.title}"
                      </h3>
                      <p className="text-muted-foreground">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-authority rounded-xl p-8 max-w-2xl mx-auto border border-primary/20">
              <p className="text-2xl font-semibold text-primary mb-2">
                72% of VPs report feeling isolated in their role.
              </p>
              <p className="text-lg text-executive-red font-medium">
                Leadership is the loneliest level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Isolation Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              The Loneliness of Being <span className="text-executive-red">Everyone's Answer</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              "Team looks to you for decisions, executives look to you for results, who do you look to?",
              "Every departmental problem becomes your personal crisis to solve",
              "You're managing up and down simultaneously with no one managing you",
              "Your wins get attributed to the team, your failures get attributed to your leadership"
            ].map((pain, index) => (
              <Card key={index} className="border-l-4 border-l-executive-red bg-gradient-to-r from-executive-red/5 to-transparent">
                <CardContent className="p-6">
                  <p className="text-lg text-primary">• "{pain}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-gradient-to-br from-isolation-grey/10 to-primary/5 border-primary/30 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <p className="text-xl text-primary italic leading-relaxed">
                  "Look around your office. Who's there to help you think through the hard decisions? 
                  That empty chair is why you feel so alone."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Lead Like You Have the <span className="text-leadership-gold">Support System You Deserve</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stop being the bottleneck. Start being the catalyst.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Strategic Planning AI",
                description: "Turn executive vision into actionable team plans"
              },
              {
                title: "Team Performance AI", 
                description: "Monitor and develop your people without micromanaging"
              },
              {
                title: "Executive Reporting AI",
                description: "Generate board-ready insights and recommendations"
              },
              {
                title: "Cross-functional AI",
                description: "Coordinate with other departments seamlessly"
              }
            ].map((solution, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-leadership-gold">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">"{solution.description}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Form */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Get the Strategic Thinking Time <span className="text-executive-red">Leadership Demands</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                VP leadership consultation with someone who understands the pressure you're under
              </p>
            </div>

            <Card className="shadow-executive border-primary/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-primary font-medium">
                      How should we address you in executive sessions?
                    </Label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="department" className="text-primary font-medium">
                      Which area of the business do you lead?
                    </Label>
                    <Input 
                      id="department"
                      placeholder="e.g., Sales, Marketing, Operations, Product"
                      value={formData.department}
                      onChange={(e) => setFormData(prev => ({...prev, department: e.target.value}))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="teamSize" className="text-primary font-medium">
                      How many people look to you for direction?
                    </Label>
                    <Input 
                      id="teamSize"
                      placeholder="Team size"
                      value={formData.teamSize}
                      onChange={(e) => setFormData(prev => ({...prev, teamSize: e.target.value}))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-primary font-medium mb-4 block">
                      What are your biggest pressure points? (Select all that apply)
                    </Label>
                    <div className="space-y-3">
                      {pressurePoints.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Checkbox 
                            checked={formData.pressurePoints.includes(point)}
                            onCheckedChange={(checked) => handlePressurePointChange(point, !!checked)}
                          />
                          <label className="text-sm leading-relaxed cursor-pointer">
                            {point}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="vision" className="text-primary font-medium">
                      What kind of leader would you be with proper support?
                    </Label>
                    <Textarea 
                      id="vision"
                      placeholder="Describe your leadership vision..."
                      value={formData.leadershipVision}
                      onChange={(e) => setFormData(prev => ({...prev, leadershipVision: e.target.value}))}
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-executive hover:shadow-authority transition-all duration-300 text-lg py-6"
                  >
                    Amplify My Leadership Impact
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPLandingPage;