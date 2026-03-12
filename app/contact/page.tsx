"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LogoSmall from "../../public/images/logo-small.png";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-6xl opacity-20">
            <Image src={LogoSmall} alt="leaves" width={265}/>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-teal-700 mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {[
              {
                icon: MapPin,
                title: t.contact.locationTitle,
                content: (
                  <p className="text-gray-700">
                    Calle Principal s/n<br />Centro, Yobain<br />Yucatán 97751, México
                  </p>
                ),
              },
              {
                icon: Phone,
                title: t.contact.phone,
                content: (
                  <p className="text-gray-700">
                    +52 999 123 4567<br />WhatsApp: +52 999 123 4567
                  </p>
                ),
              },
              {
                icon: Mail,
                title: t.contact.email,
                content: (
                  <p className="text-gray-700">
                    hello@pinayoga.com<br />info@pinayoga.com
                  </p>
                ),
              },
              {
                icon: Clock,
                title: t.contact.hoursTitle,
                content: (
                  <div className="text-gray-700 space-y-1">
                    <p>{t.book.monday} - {t.book.friday}: 7:00 AM - 8:00 PM</p>
                    <p>{t.book.saturday}: 9:00 AM - 5:00 PM</p>
                    <p>{t.book.sunday}: {t.contact.closed}</p>
                  </div>
                ),
              },
            ].map(({ icon: Icon, title, content }) => (
              <div key={title} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Icon className="text-teal-700" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-2">{title}</h3>
                    {content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map & Form */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-teal-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.234!2d-88.1234!3d20.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU5JzE1LjQiTiA4OMKwMDcnMjQuMiJX!5e0!3m2!1sen!2smx!4v1645564857890!5m2!1sen!2smx"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Pina Yoga Studio Location"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-teal-100">
              <h3 className="text-2xl font-serif text-teal-700 mb-6">{t.contact.sendUs}</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.name}</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.email}</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.message}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
                    placeholder={t.contact.howCan}
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                >
                  {t.contact.sendMessage}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Section */}
        <div className="mt-16 bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-xl p-12 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-6xl opacity-20">🪷</div>
          <div className="absolute bottom-4 left-4 text-6xl opacity-20">🌿</div>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-serif mb-4">Visit Our Studio</h2>
            <p className="text-lg text-cyan-50 mb-8">
              Experience the peaceful atmosphere of our studio in the tranquil town of Yobain, Yucatán. Free parking available. First class is always free for new students!
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div><div className="text-3xl mb-2">🅿️</div><p className="text-cyan-50">Free Parking</p></div>
              <div><div className="text-3xl mb-2">🧘‍♀️</div><p className="text-cyan-50">All Equipment Provided</p></div>
              <div><div className="text-3xl mb-2">🌿</div><p className="text-cyan-50">Eco-Friendly Studio</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
