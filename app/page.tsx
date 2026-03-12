"use client";

import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import { useLanguage } from "./contexts/LanguageContext";

const studioImages = [
  '/images/yoga_first.png',
  "/images/yoga_second.jpg",
  "/images/yoga_third.png",
];

const instructorImages = [
  "/images/prof-1.jpg",
  "/images/prof-2.jpg",
  "/images/prof-3.jpg",
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  fade: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  dotsClass: "slick-dots custom-dots",
};

export default function HomePage() {
  const { t } = useLanguage();
  const instructors = [
    { image: instructorImages[0], ...t.home.instructor1 },
    { image: instructorImages[1], ...t.home.instructor2 },
    { image: instructorImages[2], ...t.home.instructor3 },
  ];

  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <section className="hero-carousel relative h-[70vh] overflow-hidden">
        <Slider {...sliderSettings}>
          {studioImages.map((image, index) => (
            <div key={index} className="relative h-[70vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={`Studio ${index + 1}`} className="w-full h-[70vh] object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </Slider>
      </section>

      {/* Inspiring Quote */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 relative">
        <div className="absolute top-10 left-10 text-6xl opacity-10">🌿</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-10">🪷</div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-3xl md:text-4xl font-serif text-teal-700 italic leading-relaxed">
            &ldquo;{t.home.quote}&rdquo;
          </p>
          <p className="mt-4 text-gray-600">— {t.home.quoteAuthor}</p>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-teal-700 text-center mb-4">{t.home.instructorsTitle}</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">{t.home.instructorsSubtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">{instructor.name}</h3>
                  <p className="text-teal-600 mb-3">{instructor.specialty}</p>
                  <p className="text-gray-600">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={Logo} alt="leaves" width={900} className="absolute top-1 left-1/2 -translate-x-1/2  text-9xl"/>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-serif mb-6">{t.home.ctaTitle}</h2>
          <p className="text-xl mb-8 text-cyan-50">{t.home.ctaSubtitle}</p>
          <Link href="/book" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition-colors shadow-lg">
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}
