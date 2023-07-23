import './create-post.js';
import './create-comment.js';

import './create-picture.js';
import './big-picture-form.js';
import './gallery.js';
import { createMorePosts } from './create-post.js';
import { renderGallery } from './gallery.js';

const arrPictures = createMorePosts();

renderGallery(arrPictures);

