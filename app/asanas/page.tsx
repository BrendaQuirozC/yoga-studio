"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import LogoSmall from "../../public/images/logo-small.png";

interface Asana {
  name: string;
  sanskritName: string;
  description: string;
  benefits: string[];
  image: string;
  difficulty: string;
}

export default function AsanasPage() {
  const { t } = useLanguage();
  const [selectedAsana, setSelectedAsana] = useState<number | null>(null);

  const getDifficultyColor=(difficulty: string)=> {
    switch (difficulty) {
      case t.difficulties.beginner :    return "bg-green-100 text-green-800";
      case t.difficulties.intermediate: return "bg-cyan-100 text-cyan-800";
      case t.difficulties.advanced:     return "bg-teal-100 text-teal-800";
      default:             return "bg-gray-100 text-gray-800";
    }
  }

  const asanas: Asana[] = [
    {
      name: t.asanas.pose1.name,
      sanskritName: t.asanas.pose1.sanskrit,
      description: t.asanas.pose1.description,
      benefits: t.asanas.pose1.benefits,
      image: "https://i.pinimg.com/736x/24/18/b3/2418b35b1c30cfe9ecbf7232861c1163.jpg",
      difficulty: t.asanas.pose1.difficulty,
    },
    {
      name: t.asanas.pose2.name,
      sanskritName: t.asanas.pose2.sanskrit,
      description: t.asanas.pose2.description,
      benefits: t.asanas.pose2.benefits,
      image: "https://i.pinimg.com/736x/70/c5/4a/70c54ad80650f5aa32de9ffa2e812490.jpg",
      difficulty: t.asanas.pose2.difficulty,
    },
    {
      name: t.asanas.pose3.name,
      sanskritName: t.asanas.pose3.sanskrit,
      description: t.asanas.pose3.description,
      benefits: t.asanas.pose3.benefits,
      image: "https://i.pinimg.com/1200x/5b/3b/ca/5b3bca776716c6333314d85c3bbbd825.jpg",
      difficulty: t.asanas.pose3.difficulty,
    },
    {
      name: t.asanas.pose4.name,
      sanskritName: t.asanas.pose4.sanskrit,
      description: t.asanas.pose4.description,
      benefits: t.asanas.pose4.benefits,
      image: "https://i.pinimg.com/736x/20/e7/c5/20e7c50a204c76a1c3ceab13c9267eb0.jpg",
      difficulty: t.asanas.pose4.difficulty,
    },
    {
      name: t.asanas.pose5.name,
      sanskritName: t.asanas.pose5.sanskrit,
      description: t.asanas.pose5.description,
      benefits: t.asanas.pose5.benefits,
      image: "https://i.pinimg.com/1200x/47/ed/4d/47ed4d75874435e5311c361105814d03.jpg",
      difficulty: t.asanas.pose5.difficulty,
    },
    {
      name: t.asanas.pose6.name,
      sanskritName: t.asanas.pose6.sanskrit,
      description: t.asanas.pose6.description,
      benefits: t.asanas.pose6.benefits,
      image: "https://i.pinimg.com/1200x/3c/2c/ad/3c2cad841c0dcb663580a2a6de8063f8.jpg",
      difficulty: t.asanas.pose6.difficulty,
    },
    {
      name: t.asanas.pose7.name,
      sanskritName: t.asanas.pose7.sanskrit,
      description: t.asanas.pose7.description,
      benefits: t.asanas.pose7.benefits,
      image: "https://i.pinimg.com/1200x/0f/dc/64/0fdc64177cd9c685903dacca591debc9.jpg",
      difficulty: t.asanas.pose7.difficulty,
    },
    {
      name: t.asanas.pose8.name,
      sanskritName: t.asanas.pose8.sanskrit,
      description: t.asanas.pose8.description,
      benefits: t.asanas.pose8.benefits,
      image: "https://i.pinimg.com/736x/d7/50/42/d75042a5a9f42f34b1b0340dac7d490a.jpg",
      difficulty: t.asanas.pose8.difficulty,
    },
    {
      name: t.asanas.pose9.name,
      sanskritName: t.asanas.pose9.sanskrit,
      description: t.asanas.pose9.description,
      benefits: t.asanas.pose9.benefits,
      image: "https://i.pinimg.com/736x/72/62/69/726269ce4a9105228b2b18cef7701fd0.jpg",
      difficulty: t.asanas.pose9.difficulty,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-6xl opacity-20">
            <Image src={LogoSmall} alt="leaves" width={265}/>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-teal-700 mb-4">{t.asanaLibrary}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.asanaLibraryDesc}
          </p>
        </div>

        {/* Asanas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {asanas.map((asana, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 ${
                selectedAsana === index
                  ? "scale-105 ring-4 ring-teal-400"
                  : "hover:scale-[1.02] hover:shadow-xl"
              }`}
              onClick={() => setSelectedAsana(selectedAsana === index ? null : index)}
            >
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asana.image}
                  alt={asana.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(asana.difficulty)}`}>
                    {asana.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif text-teal-700 mb-1">{asana.sanskritName}</h3>
                <p className="text-sm text-teal-600 italic mb-3">{asana.name}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">{asana.description}</p>

                {/* Benefits - Expandable */}
                <motion.div
                  initial={false}
                  animate={{ height: selectedAsana === index ? "auto" : 0, opacity: selectedAsana === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-teal-200 pt-4 mt-4">
                    <h4 className="font-semibold text-teal-700 mb-2">{t.benefits}:</h4>
                    <ul className="space-y-1">
                      {asana.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-teal-600 mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <button
                  className="mt-4 text-teal-700 font-semibold text-sm hover:text-teal-600 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAsana(selectedAsana === index ? null : index);
                  }}
                >
                  {selectedAsana === index ? t.showLess : t.learMore}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice Tips */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl p-8 border-2 border-teal-200">
          <h3 className="text-2xl font-serif text-teal-700 mb-4 text-center">
            {t.asanas.practiceTips.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-2">🧘</div>
              <h4 className="font-semibold mb-2">
                {t.asanas.practiceTips.tip1.head}
              </h4>
              <p className="text-sm">
                {t.asanas.practiceTips.tip1.sub}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🌬️</div>
              <h4 className="font-semibold mb-2">
                {t.asanas.practiceTips.tip2.head}
              </h4>
              <p className="text-sm">
                {t.asanas.practiceTips.tip2.sub}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⏰</div>
              <h4 className="font-semibold mb-2">
                {t.asanas.practiceTips.tip3.head}
              </h4>
              <p className="text-sm">
                {t.asanas.practiceTips.tip3.sub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
