import React, { FC } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from './Carousel.module.scss';
import {Card} from '../Card'

interface CarouselProps {}

const Carousel: FC<CarouselProps> = () => (
  <div className={styles.Carousel} data-testid="Carousel">
    {/* <Card className={styles.CarouselContainer}> */}
      
    <OwlCarousel
        className="owl-theme"
        // loop
        autoplay
        items={10}
        mouseDrag={true}
        margin={10}
        dots={false}
      >
        <div className="item">
          <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
        </div>
        <div className="item">
          <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
        </div>
        <div className="item">
          <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
        </div>
        <div className="item">
          <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
        </div>
        <div className="item">
          <img src="https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" />
        </div>
      </OwlCarousel>
  
    {/* </Card> */}
  </div>
);

export default Carousel;
