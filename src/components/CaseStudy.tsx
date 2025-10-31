import { Card, CardContent } from "@/components/ui/card";
import { Quote, TrendingUp, MapPin, Users } from "lucide-react";

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Caso de Sucesso
          </h2>
          <p className="text-lg text-muted-foreground">
            Como a LocationPro ajudou um stand do Porto a crescer 150%
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Informação do Cliente */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-lg italic text-foreground mb-4">
                      "Antes do LocationPro, escolhemos uma localização baseada apenas em intuição. 
                      Após usar a plataforma, identificamos que estávamos numa zona com baixo tráfego de 
                      potenciais clientes. Mudámos para o local sugerido e em 6 meses triplicámos as visitas."
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">Miguel Santos</p>
                      <p className="text-sm text-muted-foreground">Director Geral, AutoPremium Porto</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-background rounded-lg p-6 border">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Localização Escolhida
              </h3>
              <p className="text-muted-foreground mb-2">
                <strong>Antes:</strong> Rua do Heroísmo, Porto (zona residencial)
              </p>
              <p className="text-muted-foreground">
                <strong>Depois:</strong> Avenida da Boavista, próximo ao Shopping (alta visibilidade)
              </p>
            </div>
          </div>

          {/* Métricas de Sucesso */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">+150%</div>
                <p className="text-sm text-muted-foreground">Aumento em Vendas</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">+300%</div>
                <p className="text-sm text-muted-foreground">Mais Visitas</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-4">💰</div>
                <div className="text-4xl font-bold text-primary mb-2">€1.2M</div>
                <p className="text-sm text-muted-foreground">ROI em 12 meses</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <div className="text-4xl font-bold text-primary mb-2">6 meses</div>
                <p className="text-sm text-muted-foreground">Tempo de Payback</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline do Projeto */}
        <div className="mt-12 bg-background rounded-lg p-6 border">
          <h3 className="font-semibold text-lg mb-6">Timeline do Projeto</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Mês 1-2</div>
              <div className="text-muted-foreground">Análise detalhada de 15 localizações no Grande Porto</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Mês 3</div>
              <div className="text-muted-foreground">Mudança para nova localização na Av. da Boavista</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Mês 4-6</div>
              <div className="text-muted-foreground">Crescimento consistente de 25% mês a mês</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">Mês 12</div>
              <div className="text-muted-foreground">Resultados consolidados: +150% vendas, +300% visitas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
