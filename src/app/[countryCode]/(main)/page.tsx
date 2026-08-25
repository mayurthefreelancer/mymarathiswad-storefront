import { Metadata } from "next"
import Hero from "@modules/home/components/hero"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Heading } from "@medusajs/ui"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Marathi Swad | Authentic Maharashtrian Groceries & Festive Faral in Australia",
  description: "Taste of Maharashtra delivered Australia-wide. Fresh Diwali Faral, regional masalas, flours, and sweets.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params
  const region = await getRegion(countryCode)

  // Fetch all published products directly instead of relying on collections
  const { response } = await listProducts({
    countryCode,
    queryParams: { limit: 12, fields: "*variants.calculated_price,+metadata" },
  }).catch(() => ({ response: { products: [], count: 0 } }))

  const products = response?.products || []

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Direct Product Grid */}
      <div className="content-container py-12 small:py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-amber-700 text-xs sm:text-sm font-bold uppercase tracking-widest">
            अस्सल महाराष्ट्रीयन चव
          </span>
          <Heading level="h2" className="text-3xl font-extrabold text-ui-fg-base mt-2">
            Featured Delicacies & Groceries
          </Heading>
          <p className="text-ui-fg-subtle text-sm max-w-lg mt-2">
            Air-flown traditional sweets, festive faral, and regional spice staples delivered across Australia & New Zealand.
          </p>
        </div>

        {products.length > 0 ? (
          <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
            {products.map((product) => (
              <li key={product.id}>
                <ProductPreview product={product} region={region!} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center max-w-md mx-auto">
            <p className="text-amber-900 font-semibold">No products currently loaded.</p>
            <p className="text-xs text-amber-700 mt-2">
              Ensure your products are published, assigned to the <strong>Default Sales Channel</strong>, and have prices in <strong>AUD</strong> in Medusa Admin.
            </p>
          </div>
        )}
      </div>
    </>
  )
}