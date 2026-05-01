import type { PublicPropertyCard as PublicPropertyCardType } from "@/server/public-b2c";

import { PropertyPublicCard } from "./PropertyPublicCard";

export function PropertyResultsGrid({ properties }: { properties: PublicPropertyCardType[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyPublicCard key={property.id} property={property} />
      ))}
    </div>
  );
}
