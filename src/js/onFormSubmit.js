import * as apiServices from './services/fetch-backend';
import { markUpPopularFilmGallery } from './mark_up_popular_film_gallery';

const refs = {
  searchForm: document.querySelector('.search-form'),
  headerErrorText: document.querySelector('.header-error__text'),
  gallery: document.querySelector('.gallery'),
  btnspin: document.querySelector('btn-search')
};

let page = 1;
let searchQuery = '';
let totalHits;

refs.searchForm.addEventListener('submit', onSubmitClick);
refs.btnspin.addEventListener('click', onMoreLoadBtnClick);

function onSubmitClick(event) {
  event.preventDefault();
  searchQuery = event.currentTarget.elements.searchQuery.value;
  refs.gallery.innerHTML = '';
  page = 1;

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  if (searchQuery === '') {
    return (refs.headerErrorText.textContent = '');
  }
  event.target.reset();
  apiServices(searchQuery, page).then((res) => {
    const imgArray = res.data.hits;
    totalHits = res.data.totalHits;

    if (imgArray.length === 0) {
      return refs.headerErrorText('Sorry, there are no images matching your search query. Please try again.');
    }
  });
}

function onMoreLoadBtnClick() {
  apiServices(searchQuery, page).then((res) => {
    markUpPopularFilmGallery(res);
    // isEndOfImg(page, totalHits);
    page += 1;
  });
}
export default onSubmitClick;
