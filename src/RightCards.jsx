import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import reactLogo from "./assets/React.webp";
import laravelLogo from "./assets/Laravel.png";

export default function RightCards({logo}) {
  const cardRef = useRef(null);

  useEffect(() => {
    // Kartın ilk başta görünmemesi
    gsap.set(cardRef.current, { opacity: 0 });

    // İlk açılışta kartın yavaşça görünmesi
    gsap.to(cardRef.current, {
      opacity: 1, // Opacity 1 olacak
      duration: 0.5,
      ease: "power1.out", // Yumuşak bir şekilde görünme efekti
    });
    // Yukarı-aşağı hareket animasyonu
    gsap.to(cardRef.current, {
      y: 20, // Y ekseninde 20px aşağı inme
      duration: 3, // Hareket süresi
      ease: "power1.inOut", // Yumuşak hız eğrisi
      repeat: -1, // Sürekli tekrar et
      yoyo: true, // Aşağı indikten sonra yukarı geri dön
    });

    // Dönüş animasyonu
    gsap.to(cardRef.current, {
      rotation: () => gsap.utils.random(45, 90), // 90 derece dönüş
      duration: 3, // Bir dönüş süresi
      repeat: -1, // Sürekli tekrar etabsolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700
      yoyo: true, // Tersine dönüş
      ease: "power1.inOut", // Dönüşün düzgün ve kesintisiz olması için
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="top-16 right-10 cursor-pointer hover:scale-50 absolute p-1 bg-white border-2 border-gray-800 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <img src={laravelLogo} className="w-12 h-12" alt="Laravel Logo" />
    </div>
  );
}
