import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import css from './ImageGalleryItem.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ImageGalleryItem =({ webformatURL, tags, previewURL, largeImageURL })=>{
const [showModal, setShowModal] = useState(false)

 const toggleModal = () => {
  setShowModal(prev=>!prev)
  };
    return (
      <>
        <li className={css['photo-card']} onClick={toggleModal}>
          <LazyLoadImage
            src={webformatURL}
            alt={tags}
            placeholderSrc={previewURL}
            effect="blur"
            className={css['fetched-image']}
          />
        </li>
        {showModal && (
          <Modal 
          onClose={toggleModal}
          >
            <LazyLoadImage
            src={largeImageURL}
            alt={tags}
            placeholderSrc={webformatURL}
          />
          </Modal>
        )}
      </>
    );
  }

