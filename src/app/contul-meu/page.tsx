"use client";

import { motion } from "framer-motion";
import { User, Mail, Calendar, CreditCard, Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPlanById } from "@/lib/plans";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function ContulMeuPage() {
  // Mock user data for demonstration
  const mockUser = {
    fullName: "Ion Popescu",
    email: "ion.popescu@example.com",
    createdAt: "2024-01-01",
  };
  
  // Mock subscription data - in production, fetch from database
  const mockSubscription = {
    tier: "pro" as const,
    status: "active",
    startDate: "2024-01-01",
    nextBillingDate: "2024-02-01",
  };

  const currentPlan = getPlanById(mockSubscription.tier);

  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl mb-4">
            Contul meu
          </h1>
          <p className="text-lg text-muted-foreground">
            Gestionează-ți profilul și abonamentul
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Informații profil
                  </CardTitle>
                  <CardDescription>
                    Datele tale personale și de contact
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Nume complet</p>
                      <p className="text-sm text-muted-foreground">
                        {mockUser.fullName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {mockUser.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Membru din</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(mockUser.createdAt).toLocaleDateString('ro-RO')}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Settings className="h-4 w-4 mr-2" />
                    Editează profilul
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Subscription Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Detalii abonament
                  </CardTitle>
                  <CardDescription>
                    Planul tău curent și informații de facturare
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentPlan ? (
                    <>
                      <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-2xl font-bold font-serif">
                              {currentPlan.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {currentPlan.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">
                              {currentPlan.price} {currentPlan.currency}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              pe {currentPlan.interval}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="text-sm font-medium">Status</p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {mockSubscription.status === "active" ? "Activ" : mockSubscription.status}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Următoarea plată</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(mockSubscription.nextBillingDate).toLocaleDateString('ro-RO')}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="outline" className="flex-1">
                          Schimbă planul
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Anulează abonamentul
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">
                        Nu ai un abonament activ
                      </p>
                      <Button>
                        Alege un plan
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Progresul tău</CardTitle>
                  <CardDescription>
                    Statistici rapide despre activitatea ta
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cursuri finalizate</span>
                    <span className="text-2xl font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ore petrecute</span>
                    <span className="text-2xl font-bold">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Teste realizate</span>
                    <span className="text-2xl font-bold">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Scor mediu</span>
                    <span className="text-2xl font-bold">8.5</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Sesiune viitoare</CardTitle>
                  <CardDescription>
                    Următoarea ta întâlnire live
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Algebra avansată</p>
                    <p className="text-sm text-muted-foreground">
                      Vineri, 5 Ianuarie 2024
                    </p>
                    <p className="text-sm text-muted-foreground">
                      18:00 - 19:30
                    </p>
                    <Button className="w-full mt-4">
                      Participă acum
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
