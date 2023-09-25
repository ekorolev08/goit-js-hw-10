const baseurl = "https://api.thecatapi.com/v1";
const api_key =
"live_dwHc5vcyRLaKan03R1TlsEdKWlY4kezQrnwMP8w9ir8OhMydXmu8i1lJbZRzUM8A";

export function fetchBreeds() {
  return fetch(`${baseurl}/breeds?api_key=${api_key}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export function fetchCatByBreed(breedId) {
  return fetch(`${baseurl}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};