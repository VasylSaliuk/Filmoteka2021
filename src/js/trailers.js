import * as basicLightbox from 'basiclightbox';
function createTrailerLink(elementRef) {
  const trailerBtn = elementRef;

  trailerBtn.forEach(el =>
    el.addEventListener('click', e => {
     drawModalForTrailler(e.target.dataset.id);
    }),
  );

 function drawModalForTrailler(id){
    const apiKey = '0f42664b7f6700c34263c8262c49b65b';
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`;

    fetch(url).then(response => response.json()
      ).then(data => {
      const id = data.results[0].key;
      const instance = basicLightbox.create(`
      <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
      instance.show();
      })
  };
}

export default { createTrailerLink };