import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
  fetchPriority?: "high" | "low" | "auto";
  onLoad?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  loading = "lazy",
  width,
  height,
  fetchPriority = "auto",
  onLoad 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === "eager") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 skeleton" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-all duration-500 ${isLoaded ? 'loaded' : 'img-blur-up'}`}
          onLoad={handleLoad}
          loading={loading}
          width={width}
          height={height}
          fetchPriority={fetchPriority}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
