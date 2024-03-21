const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  try {
      const searchTerm = form.elements.query.value;
      const config = { params: { q: searchTerm } };
      const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
      console.log(res.data[0].show.image.medium);
      // window.open(res.data[0].show.image.medium, "_blank");
      makeImages(res.data);
      form.elements.query.value = "";
    
  } catch (e) {
    console.log("Error", e);
  }
});             

const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
