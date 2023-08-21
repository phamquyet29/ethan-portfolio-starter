import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// next image
import Image from "next/image";
//import required modules
import { Pagination } from "swiper";
// icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path1: "/thumb1.jpg",
        },
        {
          title: "title",
          path2: "/thumb2.jpg",
        },
        {
          title: "title",
          path3: "/thumb3.jpg",
        },
        {
          title: "title",
          path4: "/thumb4.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path1}
                        width={500}
                        height={300}
                        alt=""
                      />
                      <Image
                        src={image.path2}
                        width={500}
                        height={300}
                        alt=""
                      />

                      <Image
                        src={image.path3}
                        width={500}
                        height={300}
                        alt=""
                      />
                      <Image
                        src={image.path4}
                        width={500}
                        height={300}
                        alt=""
                      />

                      {/* overlay gradient */}

                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* title */}

                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <Link href={"https://github.com/HuTao2k3/da1_nhom2"}>
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
