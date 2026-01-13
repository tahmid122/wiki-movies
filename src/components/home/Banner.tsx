"use client";
import { motion } from "motion/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
interface Banner {
  id: number;
  title: string;
  description: string;
  staring: string[];
  genres: { name: string; link: string }[];
  image: string;
}
// Banner array
const bannerArray: Banner[] = [
  {
    id: 83533,
    title: "Avatar: Fire and Ash",
    description:
      "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Na'vi tribe led by the ruthless Varang. Jake's family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits.",
    staring: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    image: "/banner/avatar.jpg",
    genres: [
      { name: "Science Fiction", link: "/movies/genres/science fiction/878/1" },
      { name: "Adventure", link: "/movies/genres/adventure/12/1" },
      { name: "Fantasy", link: "/movies/genres/fantasy/14/1" },
    ],
  },
  {
    id: 425274,
    title: "Now You See Me: Now You Don't",
    description:
      "The original Four Horsemen reunite with a new generation of illusionists to take on powerful diamond heiress Veronika Vanderberg, who leads a criminal empire built on money laundering and trafficking. The new and old magicians must overcome their differences to work together on their most ambitious heist yet.",
    staring: ["Jesse Eisenberg", "Dominic Sessa", "Ariana Greenblatt"],
    image: "/banner/nowyou.jpg",
    genres: [
      { name: "Thriller", link: "/movies/genres/thriller/53/1" },
      { name: "Crime", link: "/movies/genres/crime/80/1" },
      { name: "Mystery", link: "/movies/genres/mystery/9648/1" },
    ],
  },
  {
    id: 1084242,
    title: "Zootopia 2",
    description:
      "After cracking the biggest case in Zootopia's history, rookie cops Judy Hopps and Nick Wilde find themselves on the twisting trail of a great mystery when Gary De'Snake arrives and turns the animal metropolis upside down. To crack the case, Judy and Nick must go undercover to unexpected new parts of town, where their growing partnership is tested like never before.",
    staring: ["Jesse Eisenberg", "Dominic Sessa", "Ariana Greenblatt"],
    image: "/banner/zootopia.jpg",
    genres: [
      { name: "Animation", link: "/movies/genres/animation/16/1" },
      { name: "Comedy", link: "/movies/genres/comedy/35/1" },
      { name: "Family", link: "/movies/genres/family/10751/1" },
    ],
  },
];
const Banner = () => {
  return (
    <div className="h-130 xl:h-167 pt-15 w-full relative" id="bannerSlider">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {bannerArray?.map((banner, idx) => (
          <SwiperSlide key={idx} className="relative">
            <div className="w-full h-full  flex items-center relative">
              <Image
                src={banner?.image}
                fill
                alt="banner image"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40" />
              {/* Details */}
              <div className="container z-20">
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  // viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3 xl:max-w-1/2"
                >
                  <h1 className="text-4xl font-semibold">{banner.title}</h1>
                  <p>{banner?.description}</p>
                  <ul className="text-sm">
                    <li className="flex items-center flex-wrap gap-1">
                      <span className="text-red-500">Staring:</span>
                      <ul className="flex gap-1 items-center flex-wrap">
                        {banner?.staring.map((star, idx) => (
                          <li key={idx}>{star}</li>
                        ))}
                      </ul>
                    </li>
                    <li className="flex items-center flex-wrap gap-2">
                      <span className="text-red-500">Genres:</span>
                      <ul className="flex gap-1 items-center flex-wrap">
                        {banner.genres.map((genre, idx) => (
                          <li key={idx}>
                            <Link href={genre.link} className="underline">
                              {genre.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <Link
                    href={`/movie/${banner.id}`}
                    className="mt-5 items-center gap-1 py-2 px-4 group rounded bg-red-500 text-white font-medium hover:bg-red-700 inline-flex transition-all duration-300 "
                  >
                    See Details
                    <FaArrowRightLong className="group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
