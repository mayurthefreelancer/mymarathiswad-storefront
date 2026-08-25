// Inside src/modules/home/components/hero/index.tsx

import { Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 flex flex-col justify-center items-center text-center p-6 gap-6">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');`}</style>
      <span
        className="text-amber-200 text-sm tracking-widest uppercase font-semibold"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}
      >
        ताजी, खुसखुशीत आणि अस्सल महाराष्ट्रीय चव
      </span>
      <Heading
        level="h1"
        className="text-4xl sm:text-5xl font-extrabold text-white max-w-2xl leading-tight"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, lineHeight: "1.2em" }}
      >
        महाराष्ट्राची अस्सल चव - आता संपूर्ण ऑस्ट्रेलियात उपलब्ध
      </Heading>
      <p className="text-amber-100 max-w-xl text-base sm:text-lg"
      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, lineHeight: "1.5em" }}>
        अस्सल दिवाळी फराळ, प्रादेशिक मसाले आणि पारंपरिक पिठे थेट विमानाने ऑस्ट्रेलिया व न्यूझीलंडमधील आपल्या दारापर्यंत पोहोचवले जातात.
      </p>
      <div className="flex gap-4 mt-2">
        <LocalizedClientLink
          href="/store"
          className="bg-white text-orange-800 px-6 py-3 rounded-md font-bold hover:bg-amber-100 transition-colors shadow-md"
        >
          Shop All Groceries
        </LocalizedClientLink>
        <LocalizedClientLink
          href="/categories/diwali-sweets-and-snacks"
          className="bg-amber-900 text-white border border-amber-300 px-6 py-3 rounded-md font-bold hover:bg-amber-950 transition-colors shadow-md"
        >
          Diwali Pre-Orders
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero