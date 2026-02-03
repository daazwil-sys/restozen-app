'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Smartphone, Clock, Package } from 'lucide-react'
import Link from 'next/link'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900">
              RestoZen
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Les heures de pointe sans stress
            </p>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformez le chaos WhatsApp en commandes bien organisées. 
            Une solution simple pour les restaurants à Dakar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/commande">
              <Button size="lg" className="w-full sm:w-auto">
                Voir le formulaire de commande
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Démo Dashboard (bientôt)
            </Button>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Le problème que nous résolvons
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-lg">❌ Chaos WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    20-50 messages arrivent en même temps aux heures de pointe
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-lg">❌ Commandes perdues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Messages oubliés, mal compris ou confondus = argent perdu
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-lg">❌ Stress permanent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Le gérant panique et ne peut plus se concentrer sur la cuisine
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Notre solution
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Message automatique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Redirige les clients vers un formulaire pendant les heures de pointe
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Commandes organisées</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Toutes les infos au même endroit : nom, plat, quartier, téléphone
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Zéro stress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Le gérant traite les commandes une par une, sans confusion
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Fonctionnalités MVP
            </h2>
            
            <div className="space-y-4">
              {[
                'Formulaire de commande simple (5 champs max)',
                'Interface 100% français',
                'Design mobile-first optimisé',
                'Confirmation instantanée pour le client',
                'Tableau de bord pour le restaurateur (bientôt)',
                'Intégration WhatsApp Business',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Tarifs simples
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Offre Lancement</CardTitle>
                  <CardDescription>Pour les petits restos de quartier</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">5 000</span>
                    <span className="text-gray-600"> FCFA / mois</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    'Message automatique WhatsApp',
                    'Lien de commande personnalisé',
                    'Tableau de commandes',
                    'Support WhatsApp basique',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:border-primary/70 transition-colors bg-primary/5">
                <CardHeader>
                  <CardTitle>Offre Pro</CardTitle>
                  <CardDescription>Restos avec livraison</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">10 000</span>
                    <span className="text-gray-600"> FCFA / mois</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    'Tout l\'offre Lancement',
                    'Personnalisation du formulaire',
                    'Adaptation aux horaires',
                    'Assistance prioritaire',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Prêt à tester ?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez comment RestoZen peut transformer vos heures de pointe
          </p>
          <Link href="/commande">
            <Button size="lg" variant="secondary" className="shadow-lg">
              Voir le formulaire de commande
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            RestoZen - Propulsé par ATHENA SERVICES PLUS
          </p>
          <p className="text-xs opacity-50 mt-2">
            Dakar, Sénégal • 2025
          </p>
        </div>
      </div>
    </div>
  )
}
