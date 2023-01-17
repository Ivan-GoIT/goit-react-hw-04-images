import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

import { Section } from 'components/Section/Section';
import { Button } from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { fetchPichureData } from 'components/helpers/fetchPichureData';

import { toast } from 'react-toastify';

const STATUS = {
  idle: 'idle',
  pending: 'pending',
  success: 'success',
  rejected: 'rejected',
};

export const ImageGallery = ({ searchQuery }) => {
  const [imgData, setImgData] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState(STATUS.idle);

  const per_page = 12;

  useEffect(() => {
    setImgData([]);
    setPage(1);
  }, [searchQuery]);

  useEffect(() => {
    fetchPichureData(searchQuery, page, per_page)
      .then(res => {
        if (res.data.total !== 0) {
          return res;
        }
        throw new Error('No images matching your request');
      })
      .then(res => {
        setImgData(prev => [...prev, ...res.data.hits]);
        setStatus(STATUS.success);
      })
      .catch(err => {
        setStatus(STATUS.rejected);
        toast.error(err.message);
      });
  }, [searchQuery, page]);


  return (
    <Section className="gallery">
      <>
        <ul className={css.container}>
          {imgData.map(imgItem => (
            <ImageGalleryItem key={imgItem.id} {...imgItem} />
          ))}
        </ul>
        {status === STATUS.pending && <Loader />}
        {status === STATUS.success && !(imgData.length < per_page) && (
          <Button onClick={setPage(prev=>prev+1)} />
        )}
      </>
    </Section>
  );
};
