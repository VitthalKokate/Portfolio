import React from 'react';

export function TechLogo({ id, size = 32, className = "" }) {
  switch (id) {
    case 'java':
      // Authentic Oracle Java Coffee Cup Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="Java Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(231,111,0,0.4)]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://cdn.simpleicons.org/openjdk/ED8B00";
            }}
          />
        </div>
      );

    case 'aws':
      // Authentic Amazon Web Services AWS Logo with Smile Arrow
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size * 1.3, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,153,0,0.4)]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://cdn.simpleicons.org/amazonwebservices/FF9900";
            }}
          />
        </div>
      );

    case 'springboot':
      // Authentic Spring Boot Green Leaf Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
            alt="Spring Boot Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(109,179,63,0.4)]"
          />
        </div>
      );

    case 'springsecurity':
      // Authentic Spring Security Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://cdn.simpleicons.org/springsecurity/6DB33F"
            alt="Spring Security Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(109,179,63,0.4)]"
          />
        </div>
      );

    case 'react':
      // Authentic React Cyan Atom Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(97,218,251,0.4)]"
          />
        </div>
      );

    case 'redux':
      // Authentic Redux Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            alt="Redux Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(118,74,188,0.4)]"
          />
        </div>
      );

    case 'threejs':
      // Authentic Three.js Triangle Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg"
            alt="Three.js Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] invert"
          />
        </div>
      );

    case 'docker':
      // Authentic Docker Blue Whale Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
            alt="Docker Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(36,150,237,0.4)]"
          />
        </div>
      );

    case 'linux':
      // Authentic Linux Tux Penguin Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
            alt="Linux Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(252,198,36,0.4)]"
          />
        </div>
      );

    case 'postgresql':
      // Authentic PostgreSQL Blue Elephant Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(51,103,145,0.4)]"
          />
        </div>
      );

    case 'redis':
      // Authentic Redis Stack Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
            alt="Redis Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(220,56,45,0.4)]"
          />
        </div>
      );

    case 'rabbitmq':
      // Authentic RabbitMQ Orange Rabbit Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://cdn.simpleicons.org/rabbitmq/FF6600"
            alt="RabbitMQ Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,102,0,0.4)]"
          />
        </div>
      );

    case 'kafka':
      // Authentic Apache Kafka Logo
      return (
        <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg"
            alt="Apache Kafka Official Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] invert"
          />
        </div>
      );

    default:
      return null;
  }
}
