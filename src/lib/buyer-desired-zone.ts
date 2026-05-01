/** Serializa ciudad y zonas en un solo campo `Buyer.desiredZone` sin migración. */

const SEP = "\n---\n";

export function splitDesiredZone(raw: string | null | undefined): { city: string; interestZones: string } {
  if (!raw?.trim()) return { city: "", interestZones: "" };
  if (raw.includes(SEP)) {
    const [city, ...rest] = raw.split(SEP);
    return { city: city.trim(), interestZones: rest.join(SEP).trim() };
  }
  return { city: "", interestZones: raw.trim() };
}

export function mergeDesiredZone(city: string, interestZones: string): string | null {
  const c = city.trim();
  const z = interestZones.trim();
  if (!c && !z) return null;
  if (!c) return z;
  if (!z) return c;
  return `${c}${SEP}${z}`;
}
