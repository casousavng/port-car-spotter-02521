import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Data Analysis Dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
            <MapPin className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">
              Análise Inteligente de Localização
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Descubra o Local Perfeito para o Seu Stand de Automóveis
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Software de análise avançada que identifica as melhores oportunidades
            de localização para stands de automóveis no Grande Porto, usando
            dados de mercado, tráfego e demografia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90 group text-special-bg"
              onClick={() => window.location.href = '/comprar'}
            >
              Comprar Acesso
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all"
              onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Caso de Sucesso
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                95%
              </div>
              <div className="text-sm text-primary-foreground/80">
                Taxa de Sucesso
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                120+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Análises Realizadas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                €2.5M
              </div>
              <div className="text-sm text-primary-foreground/80">
                Investimento Otimizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
