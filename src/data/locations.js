async function getLocations() {
return await fetch("http://localhost:8080/api/properties").then(
    (response) => {
      if (!response.ok) {
        throw new Error(`erreur HTTP! statut: ${response.status}`);
      }
      return response.json();
    }
  );
}

export async function getLocation(id) {
  let locations = await getLocations();
  let location = locations.filter((location) => location.id === id);
  return location[0];
} 