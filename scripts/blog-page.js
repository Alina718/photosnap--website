import {stories} from './stories.js'
const blogSection = document.getElementById('blog');
//const media = window.matchMedia(('min-width: 700px'))

blogSection.innerHTML = stories.map(story => {
  const style = {
    backgroundImage: window.matchMedia(('min-width: 700px')).matches ? story.image.desktop : story.image.mobile
  }

  return `
          <div style="background-image: url(./${story.image.desktop})"
            id="blog-item" class="blog__item bg-image-settings">
            <div class="blog__item--content">
              <p class="subtitle color-white">${story.date}</p>
              <h3 class="min-title color-white">${story.title}</h3>
              <p class="subtitle color-white">${story.author}</p>
              <a class="blog__item--link uppercase color-white flex-ai-center" href="stories.html">
                Read Story
                <img class="arrow" src="assets/shared/desktop/arrow.svg" alt="arrow">
              </a>
          </div>
        </div>
      `
}).join('')
