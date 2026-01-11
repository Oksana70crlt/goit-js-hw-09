import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log("SimpleLightbox:", SimpleLightbox);

const images = [
  {
    preview: "https://picsum.photos/id/1015/320/240.jpg",
    original: "https://picsum.photos/id/1015/1200/800.jpg",
    description: "Norway — fjord landscape and mountains",
  },
  {
    preview: "https://picsum.photos/id/1016/320/240.jpg",
    original: "https://picsum.photos/id/1016/1200/800.jpg",
    description: "Indonesia — tropical coastline and ocean",
  },
  {
    preview: "https://picsum.photos/id/1018/320/240.jpg",
    original: "https://picsum.photos/id/1018/1200/800.jpg",
    description: "New Zealand — green hills under dramatic sky",
  },
  {
    preview: "https://picsum.photos/id/1021/320/240.jpg",
    original: "https://picsum.photos/id/1021/1200/800.jpg",
    description: "Canada — mountain lake and pine forest",
  },
  {
    preview: "https://picsum.photos/id/1022/320/240.jpg",
    original: "https://picsum.photos/id/1022/1200/800.jpg",
    description: "Iceland — waterfall and rocky valley",
  },
  {
    preview: "https://picsum.photos/id/1031/320/240.jpg",
    original: "https://picsum.photos/id/1031/1200/800.jpg",
    description: "USA — desert road and wide open space",
  },
  {
    preview: "https://picsum.photos/id/1035/320/240.jpg",
    original: "https://picsum.photos/id/1035/1200/800.jpg",
    description: "Japan — misty forest path at dawn",
  },
  {
    preview: "https://picsum.photos/id/1043/320/240.jpg",
    original: "https://picsum.photos/id/1043/1200/800.jpg",
    description: "Portugal — rocky coastline with waves",
  },
  {
    preview: "https://picsum.photos/id/1056/320/240.jpg",
    original: "https://picsum.photos/id/1056/1200/800.jpg",
    description: "Switzerland — alpine peaks and cloudy horizon",
  },
];

const galleryEl = document.querySelector(".gallery");
if (!galleryEl) throw new Error('Не знайдено ".gallery" у 1-gallery.html'); //кидаємо зрозумілу помилку

const markup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `
  )
  .join("");

galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

lightbox.refresh();


//console.log("Gallery links found:", document.querySelectorAll(".gallery a").length);
