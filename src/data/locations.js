export async function getLocations() {
await fetch("http://localhost:8080/api/properties").then(
    (reponse) => {
      if (!reponse.ok) {
        throw new Error(`erreur HTTP! statut: ${reponse.status}`);
      }
      return reponse.json();
    }
  );
}
