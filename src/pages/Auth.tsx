import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Factory, Truck, Building2, Shield } from "lucide-react";
import { toast } from "sonner";

const roles = [
  { value: "manufacturer", label: "Fabricant", icon: Factory },
  { value: "distributor", label: "Distributeur", icon: Truck },
  { value: "pharmacy", label: "Pharmacie", icon: Building2 },
  { value: "authority", label: "Autorité", icon: Shield },
];

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState("manufacturer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    // Mock authentication
    toast.success(isLogin ? "Connexion réussie !" : "Compte créé avec succès !");
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,var(--gradient-primary))] p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card shadow-[var(--shadow-medium)]">
              <Factory className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-card">MedSupply Chain</h1>
          <p className="text-sm text-card/80">Système de Traçabilité Sécurisé des Médicaments</p>
        </div>

        <Card className="shadow-[var(--shadow-medium)]">
          <CardHeader>
            <CardTitle>{isLogin ? "Connexion" : "Créer un compte"}</CardTitle>
            <CardDescription>
              {isLogin ? "Entrez vos identifiants pour accéder au tableau de bord" : "Inscrivez-vous pour un nouveau compte"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-3">
                  <Label>Sélectionnez votre rôle</Label>
                  <RadioGroup value={selectedRole} onValueChange={setSelectedRole}>
                    <div className="grid grid-cols-2 gap-3">
                      {roles.map((role) => (
                        <div key={role.value}>
                          <RadioGroupItem
                            value={role.value}
                            id={role.value}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={role.value}
                            className="flex flex-col items-center gap-2 rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                          >
                            <role.icon className="h-6 w-6" />
                            <span className="text-sm font-medium">{role.label}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                {isLogin ? "Se connecter" : "Créer un compte"}
              </Button>
            </form>

            <div className="mt-4 text-center text-sm">
              {isLogin ? "Pas encore de compte ? " : "Vous avez déjà un compte ? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-medium text-primary hover:underline"
              >
                {isLogin ? "S'inscrire" : "Se connecter"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
