import './create-picture.js';
import './big-picture-form.js';
import './gallery.js';
import './scale.js';
import './filter.js';
import './api.js';
import { setOnFormSubmit, renderModalForm } from './form.js';
import { switchToDefault } from './filter.js';
import { getData } from './api.js';
import { renderGallery } from './gallery.js';
import { showAlert } from './functions.js';
import { renderSortedPictures } from './sort.js';
import { uploadPicture } from './upload-picture.js';

getData()
  .then((data) => {
    renderGallery(data);
    renderModalForm(data);
    renderSortedPictures(data);
  })
  .catch((err) => {
    showAlert(err.message);
  });

switchToDefault();
setOnFormSubmit();
uploadPicture();
