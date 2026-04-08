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
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      fetchPriority={fetchPriority}
      decoding="async"
      onLoad={onLoad}
    />
  );
};

export default OptimizedImage;
