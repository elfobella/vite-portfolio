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
      delay: 1,
      duration: 2, // 2 saniye sürecek
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
      rotation: () => gsap.utils.random(-45, -90), // 90 derece dönüş
      duration: 3, // Bir dönüş süresi
      repeat: -1, // Sürekli tekrar et
      yoyo: true, // Tersine dönüş
      ease: "power1.inOut", // Dönüşün düzgün ve kesintisiz olması için
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="top-16 left-10 absolute hover:bg-emerald-300 cursor-pointer transition-all -rotate-[34deg] p-1 bg-white border-2 border-gray-800 rounded-lg dark:bg-gray-800 dark:border-gray-700"
    >
      <img src={reactLogo} className="w-12 h-12" alt="Laravel Logo" />
    </div>
  );
}
