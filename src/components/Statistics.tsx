import { TrendingUp, Users, MapPin, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "42%",
      label: "Aumento Médio de Vendas",
      description: "Clientes que escolheram localizações recomendadas",
    },
    {
      icon: Users,
      value: "85K+",
      label: "Potenciais Clientes Analisados",
      description: "Base de dados demográficos no Grande Porto",
    },
    {
      icon: MapPin,
      value: "18",
      label: "Zonas Estratégicas Identificadas",
      description: "Localizações premium para stands de automóveis",
    },
    {
      icon: BarChart3,
      value: "€480K",
      label: "Retorno Médio Anual",
      description: "Investimento otimizado em localização",
    },
  ];

  return (
    <section id="statistics" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resultados que Falam por Si
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dados reais de clientes que transformaram seus negócios com
            decisões baseadas em análise inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
