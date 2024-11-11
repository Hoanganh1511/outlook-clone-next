import "./mini-spin-loading.css";
interface MiniSpinLoadingProps {
  color: string;
  width: number;
  height: number;
  position: string;
  className?: string;
}
const MiniSpinLoading = ({
  color,
  width,
  height,
  position,
  className,
}: MiniSpinLoadingProps) => {
  return (
    <>
      <div
        className={`flex w-[${width}px] h-[${height}px] justify-${position} items-center ${className}`}
      >
        <svg
          className="mini-spinner-common"
          viewBox="0 0 50 50"
          stroke={color}
          width={width}
          height={height}
        >
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          ></circle>
        </svg>
      </div>
    </>
  );
};

export default MiniSpinLoading;
