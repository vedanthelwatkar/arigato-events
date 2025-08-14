"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Play,
  Camera,
  Film,
  Image,
  Award,
  ChevronRight,
  ChevronLeft,
} from "react-feather";
import { Button } from "../components/Button";
import YouTubePlayer from "@/components/YoutubeVideo";
import { useNavigate } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Colorful Garden Setup",
    description:
      "Vibrant outdoor celebration with decorative carousel and floral arrangements",
    image: "/portfolio/arigatoevents-1.jpg",
  },
  {
    id: 2,
    title: "Garden Celebration",
    description: "Intimate gathering in a lush botanical garden",
    image: "/portfolio/arigatoevents-2.jpg",
  },
  {
    id: 3,
    title: "Lakeside Boat Wedding",
    description:
      "Unique waterfront ceremony with decorated boat and scenic lake views",
    image: "/portfolio/arigatoevents-3.jpg",
  },
  {
    id: 4,
    title: "Grand Fireworks Display",
    description:
      "Spectacular wedding finale with dramatic fireworks and traditional groom attire",
    image: "/portfolio/arigatoevents-4.jpg",
  },
  {
    id: 5,
    title: "Floral Archway Ceremony",
    description:
      "Romantic wedding setup with elaborate white flower arch and bride portrait",
    image: "/portfolio/arigatoevents-5.jpg",
  },
  {
    id: 6,
    title: "Golden Hall Reception",
    description:
      "Luxurious indoor celebration with golden decorations and elegant lighting",
    image: "/portfolio/arigatoevents-6.jpeg",
  },
  {
    id: 7,
    title: "Modern White Venue",
    description:
      "Contemporary event space with geometric white design and artistic lighting",
    image: "/portfolio/arigatoevents-7.jpeg",
  },
  {
    id: 8,
    title: "Opulent Wedding Stage with Live Band",
    description:
      "A grand wedding stage setup featuring lavish chandeliers, golden arches, and a live band performance, creating an unforgettable ambience of elegance and celebration.",
    image: "/wedding-luxury-setup-arigatoevents.jpg",
  },
];

const videoShowcases = [
  {
    id: "XQVJgjnmgdg",
    title: "Wedding Setup Highlights",
    thumbnail: "/thumbnails/arigatoevents-grand-hayat-wedding.jpg",
  },
  {
    id: "HAMve3fhVvI",
    title: "Wedding Hall Decoration",
    thumbnail: "/thumbnails/arigatoevents-kochi.jpg",
  },
  {
    id: "8A_-ShJRnMg",
    title: "Garden Celebration Highlights",
    thumbnail: "/thumbnails/arigatoevents-lights-camera-action.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The team captured moments we didn't even know happened. Every time we look at our wedding album, we relive the day all over again.",
    author: "Priya & Rahul",
    location: "Mumbai",
  },
  {
    quote:
      "The cinematic quality of our wedding film exceeded all expectations. It's like watching a movie where we're the stars.",
    author: "Ananya & Vikram",
    location: "Delhi",
  },
  {
    quote:
      "Their drone footage captured our venue in ways we never imagined possible. Truly breathtaking.",
    author: "Meera & Arjun",
    location: "Udaipur",
  },
];

const WeddingContentCreationPage = () => {
  const [activeTab, setActiveTab] = useState("photography");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState("XQVJgjnmgdg"); // Default YouTube video ID
  const containerRef = useRef(null);
  const showcaseRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const changeVideo = (videoId) => {
    setActiveVideoId(videoId);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/wedding-celebration-arigatoevents.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity,
            scale,
            y,
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6 text-white"
          >
            Wedding Content Creation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Capturing timeless moments with cinematic elegance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              onClick={scrollToShowcase}
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Video Showcase */}
      <section ref={showcaseRef} className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Our Cinematic Approach
            </h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              We blend documentary-style authenticity with cinematic techniques
              to create wedding films and photos that tell your unique love
              story.
            </p>
          </motion.div>

          {/* Featured Video Player */}
          <div className="mb-12">
            <YouTubePlayer
              videoId={activeVideoId}
              title={
                videoShowcases.find((v) => v.id === activeVideoId)?.title ||
                "Wedding Video"
              }
              thumbnailUrl={
                videoShowcases.find((v) => v.id === activeVideoId)?.thumbnail
              }
            />
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {videoShowcases.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => changeVideo(video.id)}
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-lg shadow-md
                                cursor-pointer group ${
                                  activeVideoId === video.id
                                    ? "ring-2 ring-primary"
                                    : ""
                                }`}
                >
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play size={20} className="text-primary ml-0.5" />
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-primary/80 font-medium">
                  {video.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Our Services
            </h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              Comprehensive content creation services to document your special
              day from every angle.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("photography")}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === "photography"
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              <span className="flex items-center">
                <Camera size={18} className="mr-2" />
                Photography
              </span>
            </button>
            <button
              onClick={() => setActiveTab("videography")}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === "videography"
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              <span className="flex items-center">
                <Film size={18} className="mr-2" />
                Videography
              </span>
            </button>
            <button
              onClick={() => setActiveTab("drone")}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeTab === "drone"
                  ? "bg-primary text-white"
                  : "bg-white text-primary hover:bg-primary/10"
              }`}
            >
              <span className="flex items-center">
                <Image size={18} className="mr-2" />
                Aerial Coverage
              </span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "photography" && (
              <motion.div
                key="photography"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">
                    Timeless Photography
                  </h3>
                  <p className="text-primary/70 mb-6">
                    Our photographers blend candid moments with artfully
                    composed portraits to create a comprehensive visual story of
                    your wedding day.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Pre-wedding photoshoots",
                      "Ceremony and reception coverage",
                      "Candid guest moments",
                      "Artistic couple portraits",
                      "Family formals and group photos",
                      "Detail and decor documentation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-primary/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/wedding-experience-arigatoevents.jpg"
                    alt="Wedding photography"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === "videography" && (
              <motion.div
                key="videography"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">
                    Cinematic Videography
                  </h3>
                  <p className="text-primary/70 mb-6">
                    Our videographers create cinematic wedding films that
                    capture the emotions, sounds, and movements of your special
                    day.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Highlight films (3-5 minutes)",
                      "Feature films (15-30 minutes)",
                      "Documentary edits (60+ minutes)",
                      "Same-day edits for reception viewing",
                      "Ceremony and speech documentation",
                      "Slow-motion and time-lapse sequences",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-primary/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative">
                    <YouTubePlayer
                      videoId="FwQdnFvGX_8"
                      title="Aerial Wedding Coverage - Venue Overview"
                      thumbnailUrl="/thumbnails/arigatoevents-mehendi.jpg"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "drone" && (
              <motion.div
                key="drone"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">
                    Aerial Coverage
                  </h3>
                  <p className="text-primary/70 mb-6">
                    Our drone operators capture breathtaking aerial perspectives
                    of your venue and celebration, adding a cinematic dimension
                    to your wedding content.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Venue establishing shots",
                      "Aerial couple portraits",
                      "Dramatic landscape integration",
                      "Guest arrival sequences",
                      "Property-wide celebration coverage",
                      "Sunset/golden hour aerial footage",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-primary/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="relative">
                    <YouTubePlayer
                      videoId="yy_SgISxqgI"
                      title="Aerial Wedding Coverage - Venue Overview"
                      thumbnailUrl="/thumbnails/arigatoevents-sangeet.jpg"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">
              Portfolio
            </h2>
            <p className="text-primary/70 max-w-3xl mx-auto">
              A glimpse into our recent wedding content creation work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-medium text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">View Full Portfolio</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Client Testimonials
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Hear from couples who trusted us to capture their special day.
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <div className="mb-8">
                    <Award size={40} className="mx-auto mb-6 text-white/80" />
                    <p className="text-xl md:text-2xl italic mb-8">
                      "{testimonials[currentSlide].quote}"
                    </p>
                    <p className="font-medium text-lg">
                      {testimonials[currentSlide].author}
                    </p>
                    <p className="text-white/80">
                      {testimonials[currentSlide].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary">
              Ready to Capture Your Story?
            </h2>
            <p className="text-primary/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss how our wedding content creation services
              can document your special day in a way that you'll treasure
              forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/services")}
              >
                Explore Other Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeddingContentCreationPage;
