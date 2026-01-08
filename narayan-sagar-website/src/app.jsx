import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Sun, 
  Moon, 
  Music,
  ChevronRight,
  Star,
  Image as ImageIcon
} from 'lucide-react';

// Custom Om Icon Component
const OmIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.1"/>
    <path d="M7.5 10.5C7.5 9.12 8.62 8 10 8C11.38 8 12.5 9.12 12.5 10.5C12.5 11.88 11.38 13 10 13V14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 10 6C7.79 6 6 7.79 6 10H7.5ZM17 11.5C17 10.12 15.88 9 14.5 9C13.12 9 12 10.12 12 11.5H10.5C10.5 9.29 12.29 7.5 14.5 7.5C16.71 7.5 18.5 9.29 18.5 11.5C18.5 12.87 17.81 14.08 16.78 14.78C17.81 15.48 18.5 16.69 18.5 18.06V19H17V18.06C17 17.06 16.32 16.22 15.41 15.91L14.6 15.64L15.41 15.37C16.32 15.06 17 14.22 17 13.22V11.5Z" />
  </svg>
);

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'मुख्य पृष्ठ', id: 'home' },
    { name: 'हमारे आराध्य', id: 'deities' },
    { name: 'दर्शन समय', id: 'timings' },
    { name: 'सेवाएं', id: 'services' },
    { name: 'गैलरी', id: 'gallery' },
    { name: 'कार्यक्रम', id: 'events' },
    { name: 'सहयोग राशि', id: 'donate' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
              <OmIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-bold font-serif leading-tight ${isScrolled ? 'text-orange-900' : 'text-white'}`}>
                नारायण सागर
              </span>
              <span className={`text-xs md:text-sm font-medium tracking-wide ${isScrolled ? 'text-orange-800' : 'text-white/90'}`}>
                धार्मिक ट्रस्ट महलां
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors duration-200 text-sm lg:text-base ${
                  isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isScrolled ? 'text-gray-800' : 'text-white'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <img 
        src="/ram-parivar.jpg" 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src="https://images.unsplash.com/photo-1561569727-b52b20464689?q=80&w=2070&auto=format&fit=crop"
        }}
        alt="Temple Main Deity - Ram Parivar" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-orange-900/90" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <div className="animate-fade-in-up">
        <span className="inline-block py-1 px-3 rounded-full bg-orange-500/30 border border-orange-400/50 text-orange-50 backdrop-blur-sm mb-6 text-sm font-medium tracking-wider uppercase">
          जय श्री राम
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight">
          नारायण सागर <br/> धार्मिक ट्रस्ट महलां
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          हमारे पवित्र मंदिर में आपका स्वागत है। प्रभु श्री राम और नारायण के आशीर्वाद से जीवन में शांति और समृद्धि पाएं।
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('timings').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-transform transform hover:-translate-y-1 shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2">
            <Clock size={20} /> दर्शन समय
          </button>
          <button onClick={() => document.getElementById('events').scrollIntoView({behavior: 'smooth'})} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <Calendar size={20} /> आगामी कार्यक्रम
          </button>
        </div>
      </div>
    </div>
    
    {/* Decorative Bottom Wave */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-stone-50"></path>
      </svg>
    </div>
  </div>
);

const SectionHeading = ({ title, subtitle, icon: Icon }) => (
  <div className="text-center mb-16">
    <div className="flex items-center justify-center gap-2 text-orange-600 mb-3">
      <div className="h-[1px] w-12 bg-orange-300"></div>
      {Icon && <Icon size={20} />}
      <div className="h-[1px] w-12 bg-orange-300"></div>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif mb-4">{title}</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const Timings = () => {
  const schedule = [
    { time: "5:30 AM", event: "मंदिर खुलता है / सुप्रभातम्", icon: Sun },
    { time: "6:30 AM", event: "प्रातः आरती", icon: Music },
    { time: "7:00 AM - 12:00 PM", event: "दर्शन और अर्चना", icon: Star },
    { time: "12:00 PM", event: "मंदिर बंद (दोपहर विश्राम)", icon: Moon },
    { time: "4:00 PM", event: "मंदिर पुनः खुलता है", icon: Sun },
    { time: "7:00 PM", event: "संध्या आरती", icon: Music },
    { time: "9:00 PM", event: "शयन आरती और समापन", icon: Moon },
  ];

  return (
    <div id="timings" className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading 
          title="मंदिर की समय सारिणी" 
          subtitle="दैनिक अनुष्ठानों के लिए हमारे साथ जुड़ें। मंदिर सप्ताह के हर दिन खुला रहता है।" 
          icon={Clock} 
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
            <h3 className="text-2xl font-semibold mb-6 text-orange-800 border-b pb-4">दैनिक अनुष्ठान</h3>
            <div className="space-y-6">
              {schedule.map((item, idx) => (
                <div key={idx} className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                    <item.icon size={20} />
                  </div>
                  <div className="ml-4 flex-grow border-b border-gray-100 pb-4 group-last:border-0">
                    <p className="font-bold text-gray-800 text-lg">{item.time}</p>
                    <p className="text-gray-500">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl group">
             <img 
              src="https://images.unsplash.com/photo-1582555627756-31a892b1525a?q=80&w=2070&auto=format&fit=crop" 
              alt="Aarti Lamp" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h4 className="text-2xl font-bold mb-2">दिव्य आरती का अनुभव करें</h4>
                <p className="text-gray-200">शाम की आरती रोशनी और भक्ति का एक अद्भुत दृश्य है, जो पारंपरिक वाद्ययंत्रों के साथ होती है।</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Deities = () => {
  const deities = [
    {
      name: "श्री राम दरबार",
      desc: "मर्यादा पुरुषोत्तम राम, माता सीता और भ्राता लक्ष्मण।",
      // Updated to use the uploaded deity image
      img: "/ram-darbar.jpg",
      fallback: "https://images.unsplash.com/photo-1561569727-b52b20464689?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "भक्त हनुमान",
      desc: "शक्ति, भक्ति और निष्ठा के प्रतीक।",
      img: "https://images.unsplash.com/photo-1567591414240-e1365054f52b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "भगवान शिव",
      desc: "देवों के देव महादेव।",
      img: "https://images.unsplash.com/photo-1621841865917-8071858ba53c?q=80&w=1939&auto=format&fit=crop"
    }
  ];

  return (
    <div id="deities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="हमारे आराध्य" subtitle="हमारे गर्भगृह में विराजमान दिव्य स्वरूपों के दर्शन करें।" icon={OmIcon} />
        
        <div className="grid md:grid-cols-3 gap-8">
          {deities.map((deity, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={deity.img} 
                  onError={(e) => {
                     e.target.onerror = null; 
                     if (deity.fallback) e.target.src = deity.fallback;
                  }}
                  alt={deity.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-orange-900 to-transparent pt-20 pb-6 px-6">
                <h3 className="text-2xl font-bold text-white mb-1 font-serif">{deity.name}</h3>
                <p className="text-orange-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {deity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    { title: "अर्चना", price: "₹101", desc: "आपके नाम पर विशेष मंत्रोच्चारण।" },
    { title: "रुद्राभिषेक", price: "₹501", desc: "दूध, शहद और जल से देवता का पवित्र स्नान।" },
    { title: "वाहन पूजा", price: "₹251", desc: "सुरक्षा के लिए आपके नए वाहन का आशीर्वाद।" },
    { title: "सत्यनारायण पूजा", price: "₹1100", desc: "पूर्णिमा के दिन समूह पूजा।" },
    { title: "अन्नदान", price: "स्वेच्छा", desc: "भक्तों के दैनिक भोजन में योगदान।" },
    { title: "विवाह समारोह", price: "संपर्क करें", desc: "मंदिर परिसर में पारंपरिक विवाह समारोह।" },
  ];

  return (
    <div id="services" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="मंदिर सेवाएं" subtitle="हम आपके और आपके परिवार के कल्याण के लिए विभिन्न धार्मिक सेवाएं प्रदान करते हैं।" icon={Star} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <button className="text-orange-600 font-medium text-sm flex items-center hover:text-orange-700">
                सेवा बुक करें <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  // Updated gallery to include both Images and Videos
  const galleryItems = [
    { 
      type: 'image',
      src: "/trust-meeting.jpg",
      alt: "ट्रस्ट बैठक", 
      desc: "मंदिर विकास एवं योजना बैठक" 
    },
    { 
      type: 'image',
      src: "/trust-members.jpg", 
      alt: "ट्रस्ट सदस्य", 
      desc: "नारायण सागर धार्मिक ट्रस्ट के सम्मानित सदस्य" 
    },
    { 
      type: 'image',
      src: "/ram-darbar.jpg", 
      alt: "राम दरबार", 
      desc: "श्री राम, लक्ष्मण और सीता माता के भव्य दर्शन" 
    },
    {
      type: 'video',
      src: "/procession-video-1.mp4",
      alt: "शोभा यात्रा",
      desc: "मंदिर की भव्य शोभा यात्रा और पालकी"
    },
    {
      type: 'video',
      src: "/procession-video-2.mp4",
      alt: "मंदिर प्रवेश",
      desc: "भक्तों द्वारा मंदिर में प्रवेश और उत्सव"
    }
  ];

  return (
    <div id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title="फोटो और वीडियो गैलरी" subtitle="मंदिर के कार्यक्रमों और ट्रस्ट गतिविधियों की झलकियां।" icon={ImageIcon} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-stone-100">
              {item.type === 'video' ? (
                <div className="w-full h-full relative">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/ram-darbar.jpg" // Optional poster
                  >
                    <source src={item.src} type="video/mp4" />
                    आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।
                  </video>
                  <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm pointer-events-none">
                    वीडियो
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={item.src} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2070";
                    }}
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                    <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    { day: "15", month: "अगस्त", title: "जन्माष्टमी महोत्सव", time: "शाम 6:00 बजे से" },
    { day: "07", month: "सितंबर", title: "गणेश चतुर्थी", time: "पूरे दिन" },
    { day: "12", month: "अक्टूबर", title: "दिवाली दीपोत्सव", time: "शाम 5:00 - रात 10:00" },
  ];

  return (
    <div id="events" className="py-20 bg-orange-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="आगामी त्यौहार" subtitle="हमारे समुदाय के साथ संस्कृति और भक्ति का जश्न मनाएं।" icon={Calendar} />
        
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div key={idx} className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
              <div className="bg-orange-600 text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                <span className="text-3xl font-bold">{event.day}</span>
                <span className="text-sm uppercase tracking-wider">{event.month}</span>
              </div>
              <div className="p-6 flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{event.title}</h3>
                  <p className="text-gray-500 flex items-center gap-2">
                    <Clock size={16} /> {event.time}
                  </p>
                </div>
                <button className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-medium">
                  विवरण देखें
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Donation = () => (
  <div id="donate" className="py-20 bg-orange-900 text-white relative overflow-hidden">
    {/* Pattern Overlay */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <Heart className="w-16 h-16 text-orange-300 mx-auto mb-6" />
      <h2 className="text-4xl font-bold font-serif mb-6">हमारे मंदिर का सहयोग करें</h2>
      <p className="text-xl text-orange-100 mb-10 leading-relaxed">
        आपके उदार योगदान हमें मंदिर परिसर के रखरखाव, दैनिक अनुष्ठान और हमारे भोजन वितरण और शैक्षिक कार्यक्रमों के माध्यम से समुदाय की सेवा करने में मदद करते हैं।
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-4 bg-white text-orange-900 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg">
          ऑनलाइन दान करें
        </button>
        <button className="px-8 py-4 bg-transparent border-2 border-orange-300 text-orange-100 rounded-lg font-bold text-lg hover:bg-orange-800 transition-colors">
          स्वयंसेवा करें
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-stone-900 text-gray-400 pt-16 pb-8 border-t border-stone-800">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 text-white mb-4">
          <OmIcon className="w-8 h-8 text-orange-500" />
          <span className="text-xl font-bold font-serif">नारायण सागर धार्मिक ट्रस्ट</span>
        </div>
        <p className="mb-6 max-w-sm">
          शांति, भक्ति और सामुदायिक सेवा के लिए समर्पित एक आध्यात्मिक अभयारण्य।
          ईश्वर की कृपा आप पर सदैव बनी रहे।
        </p>
        <div className="flex space-x-4">
          {['facebook', 'twitter', 'instagram', 'youtube'].map(social => (
            <div key={social} className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors cursor-pointer">
              <span className="sr-only">{social}</span>
              <div className="w-5 h-5 bg-current rounded-sm opacity-50"></div> 
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">त्वरित लिंक</h4>
        <ul className="space-y-2">
          {['हमारे बारे में', 'सेवाएं', 'पंचांग', 'दान', 'गैलरी', 'संपर्क'].map(link => (
            <li key={link}>
              <a href="#" className="hover:text-orange-500 transition-colors">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">संपर्क करें</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
            <span>नारायण सागर, महलां<br/>जयपुर, राजस्थान</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-orange-500 shrink-0" size={18} />
            <span>+91 96643 28435</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="text-orange-500 shrink-0" size={18} />
            <span>jitsi1212@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="text-center pt-8 border-t border-stone-800 text-sm">
      <p>&copy; {new Date().getFullYear()} नारायण सागर धार्मिक ट्रस्ट महलां। सर्वाधिकार सुरक्षित। | ॐ शांति।</p>
    </div>
  </footer>
);

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-gray-800 font-sans selection:bg-orange-200" lang="hi">
      <Navbar activeSection="home" scrollToSection={scrollToSection} />
      <Hero />
      <Timings />
      <Deities />
      <Services />
      <Gallery />
      <Events />
      <Donation />
      <Footer />
    </div>
  );
}
