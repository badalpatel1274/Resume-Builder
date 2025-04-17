import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import '../css/homeTemplate.css';
import axios from 'axios';

const HomeTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await axios.get('/template/alltemplate');
        setTemplates(res.data.data);
      } catch (err) {
        console.error('Error fetching templates', err);
      }
    };

    fetchTemplates();
  }, []);

  return (
    <div className="home-templates-container">
      <h2 className="home-templates-heading">Explore Our Resume Templates</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="home-templates-swiper"
      >
        {templates.map((template) => (
          <SwiperSlide key={template._id}>
            <div className="home-templates-card">
              <img
                src={`${axios.defaults.baseURL}${template.previewImg}`}
                alt={template.name}
                className="template-image"
              />
              <p className="template-name">{template.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeTemplates;
