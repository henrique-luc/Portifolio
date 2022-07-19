import { Center, Link, Image } from "@chakra-ui/react";
import Buy from "../../assets/Buy.png";
import KenzieHub from "../../assets/KenzieHub.png";
import NuKenzie from "../../assets/NuKenzie.png";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const CarouselProjects = () => {
  return (
    <Swiper
      centeredSlides={true}
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      spaceBetween={1}
      slidesPerView={1}
      loop={true}
      effect={"fade"}
      navigation
      pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <Link
          href="https://react-entrega-s1-nu-kenzie-henrique-luc.vercel.app/"
          isExternal
        >
          <Image
            w="350px"
            h="290px"
            objectFit="cover"
            src={NuKenzie}
            alt="NuKenzie"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="https://capstone-buy-an-idea.vercel.app/" isExternal>
          <Image
            w="350px"
            h="290px"
            objectFit="cover"
            src={Buy}
            alt="Buy An Idea"
          />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          href="https://react-entrega-s2-kenzie-hub-henrique-luc.vercel.app/"
          isExternal
        >
          <Image
            w="350px"
            h="290px"
            objectFit="cover"
            src={KenzieHub}
            alt="KenzieHub"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};
