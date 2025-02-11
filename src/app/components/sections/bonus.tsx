import { Gift } from "lucide-react"

export function BonusSection() {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block p-3 bg-primary rounded-full mb-8">
          <Gift className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-4">First-Time Customer Special</h2>
        <p className="text-xl mb-6">Get a FREE decorative holder worth ₹299 with your first purchase!</p>
        <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
          <p className="text-sm text-gray-600">*Applicable on orders above ₹499. Limited time offer.</p>
        </div>
      </div>
    </section>
  )
}

