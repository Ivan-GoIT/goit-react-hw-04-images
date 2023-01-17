import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import css from './ImageGalleryItem.module.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  render() {
    const { webformatURL, tags, previewURL, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li className={css['photo-card']} onClick={this.toggleModal}>
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
          onClose={this.toggleModal}
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
}
