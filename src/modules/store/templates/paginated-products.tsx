import { listProductsWithSort } from "@lib/data/products"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { getRegion } from "@lib/data/regions"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  page: number
  countryCode: string
  sortBy?: SortOptions
  optionValueIds?: string[]
  categoryId?: string
  collectionId?: string
}

export default async function PaginatedProducts({
  page,
  countryCode,
  sortBy,
  optionValueIds,
  categoryId,
  collectionId,
}: PaginatedProductsParams) {
  const queryParams: any = {
    limit: PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  const region = await getRegion(countryCode)

  if (!region) {
    console.log("❌ REGION NOT FOUND FOR COUNTRY CODE:", countryCode)
    return null
  }

  console.log("➡️ CALLING listProductsWithSort FOR:", countryCode, "REGION ID:", region.id)

  const {
    response: { products, count },
  } = await listProductsWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
    optionValueIds,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  if (products.length === 0) {
    return (
      <div className="py-12 text-center text-ui-fg-muted">
        <p className="text-lg font-medium">No products found.</p>
        <p className="text-sm mt-1">Check that products are assigned to the Australia sales channel.</p>
      </div>
    )
  }

  return (
    <>
      <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview product={p} region={region} />
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  )
}