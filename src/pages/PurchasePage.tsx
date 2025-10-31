import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PurchasePage = () => {
  const navigate = useNavigate();

  const handlePurchase = (plan: string) => {
    // Simulação de compra - gera token aleatório
    const token = `LP-${Math.random().toString(36).substring(2, 15)}-${Date.now()}`;
    
    // Salva token no localStorage
    localStorage.setItem("locationpro-token", token);
    localStorage.setItem("locationpro-plan", plan);
    localStorage.setItem("locationpro-purchase-date", new Date().toISOString());

    toast.success(`Compra realizada com sucesso! Plano: ${plan}`);
    
    // Redireciona para a página da ferramenta
    setTimeout(() => {
      navigate("/ferramenta");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Escolha o Seu Plano
            </h1>
            <p className="text-xl text-muted-foreground">
              Acesso completo à plataforma LocationPro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Mensal */}
            <Card className="relative border-2 hover:border-primary transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Plano Mensal</CardTitle>
                <CardDescription>Ideal para testar a ferramenta</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-primary mb-2">€99</div>
                  <div className="text-muted-foreground">por mês</div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Análise de até 10 localizações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dados de mercado em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Relatórios detalhados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte por email</span>
                  </li>
                </ul>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handlePurchase("Mensal - €99")}
                >
                  Comprar Acesso Mensal
                </Button>
              </CardContent>
            </Card>

            {/* Plano Anual */}
            <Card className="relative border-2 border-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Melhor Valor
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Plano Anual</CardTitle>
                <CardDescription>Economize 40% no plano anual</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-4">
                  <div className="text-4xl font-bold text-primary mb-2">€699</div>
                  <div className="text-muted-foreground">por ano</div>
                  <div className="text-sm text-primary mt-2">€58/mês</div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Análises ilimitadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dados de mercado em tempo real</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Relatórios detalhados e exportáveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte prioritário 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consultoria mensal incluída</span>
                  </li>
                </ul>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handlePurchase("Anual - €699")}
                >
                  Comprar Acesso Anual
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 text-sm text-muted-foreground">
            <p>Pagamento seguro • Cancele a qualquer momento • Garantia de 30 dias</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PurchasePage;
