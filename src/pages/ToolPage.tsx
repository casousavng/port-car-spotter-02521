import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lock, CheckCircle } from "lucide-react";

const ToolPage = () => {
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [tokenInput, setTokenInput] = useState("");
  const [userPlan, setUserPlan] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("locationpro-token");
    const plan = localStorage.getItem("locationpro-plan");
    
    if (token) {
      setHasAccess(true);
      setUserPlan(plan || "");
    }
  }, []);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (tokenInput.startsWith("LP-")) {
      localStorage.setItem("locationpro-token", tokenInput);
      setHasAccess(true);
      toast.success("Token válido! Acesso concedido.");
    } else {
      toast.error("Token inválido. Por favor, verifique e tente novamente.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("locationpro-token");
    localStorage.removeItem("locationpro-plan");
    localStorage.removeItem("locationpro-purchase-date");
    setHasAccess(false);
    toast.info("Sessão encerrada.");
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-md">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Acesso Restrito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Para aceder à ferramenta, insira o seu token de acesso ou compre um plano.
                </p>

                <form onSubmit={handleTokenSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Digite seu token (LP-...)"
                      value={tokenInput}
                      onChange={(e) => setTokenInput(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Validar Token
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">ou</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/comprar")}
                >
                  Comprar Acesso
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Ferramenta de Análise
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Plano Ativo: {userPlan}</span>
              </div>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Terminar Sessão
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Interface da Ferramenta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 rounded-lg p-12 text-center min-h-[400px] flex items-center justify-center">
                <div className="space-y-4">
                  <div className="text-6xl">🛠️</div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Ferramenta Externa
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Esta é uma página de placeholder. A ferramenta real será integrada externamente 
                    e acessível através do seu token de acesso.
                  </p>
                  <div className="pt-4 text-sm text-muted-foreground">
                    <p className="font-mono bg-background px-4 py-2 rounded inline-block">
                      Token: {localStorage.getItem("locationpro-token")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolPage;
