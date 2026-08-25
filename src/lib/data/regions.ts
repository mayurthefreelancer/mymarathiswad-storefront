"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getAuthHeaders } from "./cookies"

export const listRegions = async () => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ regions: HttpTypes.StoreRegion[] }>(`/store/regions`, {
      method: "GET",
      headers,
      next: { revalidate: 0 },
      cache: "no-store",
    })
    .then(({ regions }) => {
      console.log("🌏 FETCHED REGIONS FROM MEDUSA:", regions.map(r => ({
        id: r.id,
        name: r.name,
        currency: r.currency_code,
        countries: r.countries?.map(c => c.iso_2)
      })))
      return regions
    })
    .catch((err) => {
      console.error("❌ FAILED TO FETCH REGIONS:", err.message)
      return []
    })
}

export const getRegion = async (countryCode: string) => {
  try {
    const regions = await listRegions()

    if (!regions?.length) {
      console.log("❌ NO REGIONS RETURNED BY STORE API")
      return null
    }

    // Match country code case-insensitively (e.g., "au" vs "AU")
    const normalizedCountry = countryCode.toLowerCase()

    const region = regions.find((r) =>
      r.countries?.some((c) => c.iso_2?.toLowerCase() === normalizedCountry)
    )

    if (!region) {
      console.log(`❌ REGION NOT FOUND FOR COUNTRY CODE: ${countryCode}. Available countries:`, 
        regions.flatMap(r => r.countries?.map(c => c.iso_2))
      )
      return null
    }

    return region
  } catch (e) {
    console.error("Error retrieving region:", e)
    return null
  }
}

export const retrieveRegion = async (id: string) => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ region: HttpTypes.StoreRegion }>(`/store/regions/${id}`, {
      method: "GET",
      headers,
      next: { revalidate: 0 },
      cache: "no-store",
    })
    .then(({ region }) => region)
    .catch(() => null)
}