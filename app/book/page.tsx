"use client";

import { useState } from "react";
import { Clock, User, Leaf, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";
import LogoSmall from "../../public/images/logo-small.png";
import Info from "../../public/images/info.png";

interface ClassSchedule {
  id: string;
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
  spotsLeft: number;
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function BookPage() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();
  const schedule: ClassSchedule[] = [
    { id: "mon-1", day: "Monday",    time: "7:00 AM",  className: "Power Yoga",                  instructor: "Brenda Quiroz",  duration: "60 min", spotsLeft: 8 },
    { id: "mon-2", day: "Monday",    time: "6:00 PM",  className: "Hatha Yoga",                  instructor: "Gisela Novelo", duration: "75 min", spotsLeft: 5 },
    { id: "tue-1", day: "Tuesday",   time: "9:00 AM",  className: "Beginners Yoga",              instructor: "Andy Aguilera",  duration: "60 min", spotsLeft: 12 },
    { id: "tue-2", day: "Tuesday",   time: "7:00 PM",  className: "Yin Yoga",                    instructor: "Gisela Novelo", duration: "90 min", spotsLeft: 6 },
    { id: "wed-1", day: "Wednesday", time: "7:30 AM",  className: "Meditation/Breathing Session",instructor: "Brenda Quiroz",  duration: "45 min", spotsLeft: 10 },
    { id: "wed-2", day: "Wednesday", time: "6:30 PM",  className: "Power Yoga",                  instructor: "Brenda Quiroz",  duration: "60 min", spotsLeft: 4 },
    { id: "thu-1", day: "Thursday",  time: "9:00 AM",  className: "Hatha Yoga",                  instructor: "Gisela Novelo", duration: "75 min", spotsLeft: 7 },
    { id: "thu-2", day: "Thursday",  time: "7:00 PM",  className: "Soundhealing Class",          instructor: "Andy Aguilera",  duration: "60 min", spotsLeft: 8 },
    { id: "fri-1", day: "Friday",    time: "8:00 AM",  className: "Beginners Yoga",              instructor: "Andy Aguilera",  duration: "60 min", spotsLeft: 9 },
    { id: "fri-2", day: "Friday",    time: "6:00 PM",  className: "Yin Yoga",                    instructor: "Gisela Novelo", duration: "90 min", spotsLeft: 5 },
    { id: "sat-1", day: "Saturday",  time: "9:00 AM",  className: "Power Yoga",                  instructor: "Brenda Quiroz",  duration: "60 min", spotsLeft: 10 },
    { id: "sat-2", day: "Saturday",  time: "11:00 AM", className: "Meditation/Breathing Session",instructor: "Andy Aguilera",  duration: "45 min", spotsLeft: 15 },
    { id: "sat-3", day: "Saturday",  time: "4:00 PM",  className: "Soundhealing Class",          instructor: "Andy Aguilera",  duration: "60 min", spotsLeft: 6 },
  ];

  const getClassColor=(className: string)=> {
    const colors: Record<string, string> = {
      "Power Yoga":                   "bg-gradient-to-br from-emerald-100 to-emerald-50 border-emerald-300",
      "Hatha Yoga":                   "bg-gradient-to-br from-cyan-100 to-cyan-50 border-cyan-300",
      "Yin Yoga":                     "bg-gradient-to-br from-teal-100 to-teal-50 border-teal-300",
      "Beginners Yoga":               "bg-gradient-to-br from-green-100 to-green-50 border-green-300",
      "Meditation/Breathing Session": "bg-gradient-to-br from-blue-100 to-blue-50 border-blue-300",
      "Soundhealing Class":           "bg-gradient-to-br from-sky-100 to-sky-50 border-sky-300",
    };
    return colors[className] || "bg-gray-50 border-gray-200";
  }

  const handleBookClass = (classId: string) => {
    setSelectedClass(classId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-6xl opacity-20">
            <Image src={LogoSmall} alt="leaves" width={265}/>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-teal-700 mb-4">{t.book.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.book.subtitle}</p>
        </div>

        {/* Legend */}
        <div className="mb-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-teal-100">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="text-teal-600" size={20} />
            <h3 className="text-lg font-semibold text-teal-700">
              {t.book.classTypesTitle}
            </h3>
            <Leaf className="text-teal-600" size={20} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { color: "bg-emerald-300", label: t.book.powerYoga },
              { color: "bg-cyan-300",    label: t.book.hathaYoga },
              { color: "bg-teal-300",    label: t.book.yinYoga },
              { color: "bg-green-300",   label: t.book.beginnersYoga },
              { color: "bg-blue-300",    label: t.book.meditation },
              { color: "bg-sky-300",     label: t.book.soundhealing },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2 justify-center">
                <div className={`w-3 h-3 ${color} rounded-full`} />
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Calendar */}
        <div className="relative h-[844] justify-items-center">
            <div className="booking-container pb-4">
              <div className="inline-flex gap-10 min-w-full">
                {days.map((day) => {
                  const dayClasses = schedule.filter((c) => c.day === day);
                  const dayKey = day.toLowerCase() as keyof typeof t.book;
                  return (
                    <div key={day} className="flex-1" style={{ minWidth: "200px" }}>
                      <div className="text-center mb-6 pb-3 border-b-2 border-teal-200">
                        <h2 className="text-2xl font-serif text-teal-700">{t.book[dayKey] as string}</h2>
                      </div>
                      <div className="space-y-4">
                        {dayClasses.map((classItem) => (
                          <div
                            key={classItem.id}
                            className={`${getClassColor(classItem.className)} min-h-[242] border-0 shadow-lg rounded-xl p-4 transition-all cursor-pointer hover:shadow-lg hover:scale-105 ${
                              selectedClass === classItem.id ? "ring-2 ring-teal-600 shadow-lg scale-105" : ""
                            }`}
                            onClick={() => handleBookClass(classItem.id)}
                          >
                            <div className="text-center mb-3">
                              <div className="text-lg font-semibold text-teal-800 mb-1">{classItem.time}</div>
                              <h3 className="text-base font-semibold text-gray-800 leading-tight h-[40]">{classItem.className === "Beginners Yoga"
                                ? t.classes.beginnersYogaTitle
                                : classItem.className === "Meditation/Breathing Session"
                                  ? t.classes.meditationTitle
                                  : classItem.className === "Soundhealing Class"
                                    ? t.classes.soundhealingTitle
                                    : classItem.className
                              }</h3>
                            </div>
                            <div className="space-y-2 text-xs text-gray-700">
                              <div className="flex items-center gap-1 justify-center">
                                <User size={12} /><span>{classItem.instructor}</span>
                              </div>
                              <div className="flex items-center gap-1 justify-center">
                                <Clock size={12} /><span>{classItem.duration}</span>
                              </div>
                            </div>
                            <div className="mt-3 text-center">
                              <span className={`inline-block text-xs px-2 py-1 rounded-full ${
                                classItem.spotsLeft <= 5 ? "bg-rose-100 text-rose-700" : "bg-green-100 text-green-700"
                              }`}>
                                {classItem.spotsLeft} {t.book.spots}
                              </span>
                            </div>
                            <button className="mt-3 w-full bg-teal-600 text-white py-2 rounded-lg text-sm hover:bg-teal-700 transition-colors">
                              {t.book.bookButton}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>

        {/* Booking Info */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100">
          <div className="text-center mb-6">
            <span className="text-4xl">
              <Image src={Info} alt="leaves" width={100} className="justify-self-center"/>
            </span>
          </div>
          <h3 className="text-2xl font-serif text-teal-700 mb-6 text-center">{t.book.bookingInfoTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              { bg: "from-teal-50 to-cyan-50",    title: t.book.cancellationTitle, text: t.book.cancellationText },
              { bg: "from-cyan-50 to-blue-50",    title: t.book.whatToBringTitle,  text: t.book.whatToBringText },
              { bg: "from-green-50 to-emerald-50",title: t.book.firstTimeTitle,    text: t.book.firstTimeText },
              { bg: "from-blue-50 to-sky-50",     title: t.book.pricingTitle,      text: t.book.pricingText },
            ].map(({ bg, title, text }) => (
              <div key={title} className={`bg-gradient-to-br ${bg} rounded-xl p-4`}>
                <h4 className="font-semibold text-teal-700 mb-2">{title}</h4>
                <p className="text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4" onClick={closeModal}>
          <div
            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
            <div className="text-center mb-6">
              <div className="text-7xl mb-4 animate-bounce-slow">🪷</div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-serif text-teal-700 mb-4">{t.book.modalTitle}</h2>
              <p className="text-xl text-teal-600 mb-6 italic">{t.book.modalMessage}</p>
              <div className="flex justify-center gap-4 text-2xl opacity-30 mb-6">
                <span>🌿</span><span>🧘</span><span>🌿</span>
              </div>
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-light tracking-wide hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out active:scale-95"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {t.book.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
