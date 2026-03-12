"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Zap, Leaf, Users, Wind, Music } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LogoSmall from "../../public/images/logo-small.png";

interface ClassType {
  name: string;
  icon: React.ElementType;
  description: string;
  purpose: string;
  benefits: string[];
  level: string;
  duration: string;
}

export default function ClassesPage() {
  const { t } = useLanguage();
  const classes: ClassType[] = [
    {
      name: t.classes.hathaYogaTitle,
      icon: Leaf,
      description: t.classes.hathaYogaDesc,
      purpose: t.classes.hathaYogaPurpose,
      benefits: t.classes.hathaYogaBenefits,
      level: t.classes.hathaYogaLevel,
      duration: t.classes.hathaYogaDuration,
    },
    {
      name: t.classes.yinYogaTitle,
      icon: Heart,
      description: t.classes.yinYogaDesc,
      purpose: t.classes.yinYogaPurpose,
      benefits: t.classes.yinYogaBenefits,
      level: t.classes.yinYogaLevel,
      duration: t.classes.yinYogaDuration,
    },
    {
      name: t.classes.beginnersYogaTitle,
      icon: Users,
      description: t.classes.beginnersYogaDesc,
      purpose: t.classes.beginnersYogaPurpose,
      benefits: t.classes.beginnersYogaBenefits,
      level: t.classes.beginnersYogaLevel,
      duration: t.classes.beginnersYogaDuration,
    },
    {
      name: t.classes.powerYogaTitle,
      icon: Zap,
      description: t.classes.powerYogaDesc,
      purpose: t.classes.powerYogaPurpose,
      benefits: t.classes.powerYogaBenefits,
      level: t.classes.powerYogaLevel,
      duration: t.classes.powerYogaDuration,
    },
    {
      name: t.classes.meditationTitle,
      icon: Wind,
      description: t.classes.meditationDesc,
      purpose: t.classes.meditationPurpose,
      benefits: t.classes.meditationBenefits,
      level: t.classes.meditationLevel,
      duration: t.classes.meditationDuration,
    },
    {
      name: t.classes.soundhealingTitle,
      icon: Music,
      description: t.classes.soundhealingDesc,
      purpose: t.classes.soundhealingPurpose,
      benefits: t.classes.soundhealingBenefits,
      level: t.classes.soundhealingLevel,
      duration: t.classes.soundhealingDuration,
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
          <h1 className="text-4xl md:text-5xl font-serif text-teal-700 mb-4">{t.classes.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.classes.subtitle}
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid gap-8">
          {classes.map((classType, index) => {
            const Icon = classType.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-teal-100"
              >
                <div className="md:flex">
                  <div className="md:w-1/4 bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center p-12">
                    <Icon size={80} className="text-white" strokeWidth={1.5} />
                  </div>
                  <div className="md:w-3/4 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-3xl font-serif text-teal-700">{classType.name}</h2>
                      <div className="text-right">
                        <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm mb-2">
                          {classType.level}
                        </span>
                        <div className="text-sm text-gray-600">{classType.duration}</div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{classType.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-teal-700 mb-2">{t.purpose}:</h3>
                      <p className="text-gray-700 italic">{classType.purpose}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-700 mb-3">{t.benefits}:</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {classType.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-4 right-4 text-5xl opacity-20">🪷</div>
          <div className="absolute bottom-4 left-4 text-5xl opacity-20">🌿</div>
          <h2 className="text-3xl font-serif mb-4 relative z-10">{t.classes.ctaTitle}</h2>
          <p className="text-xl mb-6 text-cyan-50 relative z-10">{t.classes.ctaSubtitle}</p>
          <Link href="/book" className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition-colors relative z-10 shadow-lg">
            {t.classes.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
