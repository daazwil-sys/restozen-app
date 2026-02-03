'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle2, Flame } from 'lucide-react'

// Types
interface OrderFormData {
  nom: string
  plat: string
  quartier: string
  telephone: string
  instructions?: string
}

export default function OrderFormPage() {
  const [formData, setFormData] = useState<OrderFormData>({
    nom: '',
    plat: '',
    quartier: '',
    telephone: '',
    instructions: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Liste des quartiers de Dakar (modifiable selon le resto)
  const quartiers = [
    "Plateau",
    "Médina",
    "Liberté 6",
    "Sacré-Coeur",
    "Mermoz",
    "Ouakam",
    "Almadies",
    "Ngor",
    "Yoff",
    "Castor",
    "Parcelles Assainies",
    "Grand Yoff",
    "HLM",
    "Sicap",
    "Fann",
    "Point E",
    "Autre"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi (à remplacer par appel API Supabase)
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Commande envoyée:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-gray-900">
              Commande reçue ! 🎉
            </h2>
            <p className="text-gray-600">
              Nous préparons votre commande. Vous recevrez une confirmation par WhatsApp dans quelques instants.
            </p>
          </div>

          <div className="pt-4 space-y-3">
            <p className="text-sm text-gray-500">
              Numéro de téléphone : <span className="font-semibold text-gray-900">{formData.telephone}</span>
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  nom: '',
                  plat: '',
                  quartier: '',
                  telephone: '',
                  instructions: ''
                })
              }}
              variant="outline"
              className="w-full"
            >
              Faire une nouvelle commande
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Flame className="w-5 h-5" />
            <span className="font-semibold">Heures de pointe</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
            Commande Express
          </h1>
          
          <p className="text-gray-600">
            Remplissez le formulaire ci-dessous pour passer votre commande rapidement 👇
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
          {/* Nom */}
          <div className="space-y-2">
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
              Votre nom <span className="text-red-500">*</span>
            </label>
            <Input
              id="nom"
              type="text"
              placeholder="Ex: Amadou Diop"
              value={formData.nom}
              onChange={(e) => handleInputChange('nom', e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Plat */}
          <div className="space-y-2">
            <label htmlFor="plat" className="block text-sm font-medium text-gray-700">
              Votre commande <span className="text-red-500">*</span>
            </label>
            <Input
              id="plat"
              type="text"
              placeholder="Ex: Thiébou dieune + jus de bissap"
              value={formData.plat}
              onChange={(e) => handleInputChange('plat', e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Quartier */}
          <div className="space-y-2">
            <label htmlFor="quartier" className="block text-sm font-medium text-gray-700">
              Quartier de livraison <span className="text-red-500">*</span>
            </label>
            <Select value={formData.quartier} onValueChange={(value) => handleInputChange('quartier', value)} required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez votre quartier" />
              </SelectTrigger>
              <SelectContent>
                {quartiers.map((quartier) => (
                  <SelectItem key={quartier} value={quartier}>
                    {quartier}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Téléphone */}
          <div className="space-y-2">
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
              Numéro WhatsApp <span className="text-red-500">*</span>
            </label>
            <Input
              id="telephone"
              type="tel"
              placeholder="Ex: 77 123 45 67"
              value={formData.telephone}
              onChange={(e) => handleInputChange('telephone', e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Instructions supplémentaires (optionnel) */}
          <div className="space-y-2">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
              Instructions spéciales (optionnel)
            </label>
            <textarea
              id="instructions"
              placeholder="Ex: Sans piment, livraison devant la pharmacie..."
              value={formData.instructions}
              onChange={(e) => handleInputChange('instructions', e.target.value)}
              rows={3}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la commande 🍽️'}
          </Button>

          <p className="text-xs text-center text-gray-500">
            Propulsé par <span className="font-semibold text-primary">RestoZen</span> – Les heures de pointe sans stress
          </p>
        </form>
      </div>
    </div>
  )
}
