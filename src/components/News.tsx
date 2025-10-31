import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const News = () => {
  const articles = [
    {
      image: news1,
      date: "15 Mar 2025",
      title: "Novo Stand de Luxo Abre em Localização Premium na Boavista",
      excerpt:
        "Após análise detalhada com o LocationPro, novo stand de marcas premium registra 38% mais visitas que a média do setor.",
      category: "Sucesso do Cliente",
    },
    {
      image: news2,
      date: "08 Mar 2025",
      title: "Inteligência Artificial Revoluciona Escolha de Localizações",
      excerpt:
        "Estudo revela como algoritmos de machine learning estão transformando decisões de investimento no setor automotivo.",
      category: "Tecnologia",
    },
    {
      image: news3,
      date: "01 Mar 2025",
      title: "Grande Porto: Mercado Automóvel Cresce 22% em 2024",
      excerpt:
        "Análise de mercado mostra expansão significativa do setor, com destaque para Matosinhos e Maia como zonas emergentes.",
      category: "Mercado",
    },
  ];

  return (
    <section id="news" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Últimas Notícias e Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fique atualizado com as tendências do mercado automotivo e
            histórias de sucesso dos nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-slow border-border bg-card group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                >
                  Ler mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
