const baseUrl = "https://swapi.dev/documentation#starships"

export async function getStarshipList() {
  const res = await fetch (`${baseUrl}/api/starships`)
  return res.json()

}