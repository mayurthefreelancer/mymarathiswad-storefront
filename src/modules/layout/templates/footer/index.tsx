import { listCategories } from "@lib/data/categories";
import { listCollections } from "@lib/data/collections";
import { Text } from "@modules/common/components/ui";

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  });
  const productCategories = await listCategories();

  return (
    <footer className="border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              मराठीस्वाद
            </LocalizedClientLink>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-ui-fg-base">Categories</span>
              <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle text-sm">
                <li>
                  <LocalizedClientLink href="/categories/diwali-sweets-and-snacks" className="hover:text-ui-fg-base">
                    Diwali Sweets & Snacks
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/categories/bhajanya-pithe" className="hover:text-ui-fg-base">
                    Bhajanya & Pithe (Flour)
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/categories/masale-spices-chutneys" className="hover:text-ui-fg-base">
                    Masale & Chutneys
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/categories/papads-snacks" className="hover:text-ui-fg-base">
                    Papads & Snacks
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/categories/diwali-decorations" className="hover:text-ui-fg-base">
                    Diwali Decorations
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-ui-fg-base">Information</span>
              <ul className="grid grid-cols-1 gap-2 text-ui-fg-subtle text-sm">
                <li>
                  <LocalizedClientLink href="/about-us" className="hover:text-ui-fg-base">About Us</LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/store" className="hover:text-ui-fg-base">All Products</LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/terms-of-sale" className="hover:text-ui-fg-base">Terms of Sale</LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-ui-fg-base">Contact Us</LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-base font-semibold text-ui-fg-base">Warehouse Hub</span>
              <p className="text-sm text-ui-fg-subtle">
                Claymore NSW 2559, Australia<br />
                Ph: 0410 757 450<br />
                Air-flown freshness Australia-wide
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Marathi Swad. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
