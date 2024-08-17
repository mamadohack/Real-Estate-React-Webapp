import useEmblaCarousel from "embla-carousel-react";
import { useCallback,useState,useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { EmblaCarouselType } from 'embla-carousel'


interface Props {
  children: React.ReactNode;
}
type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  canPrev:boolean
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canPrev, setcanPrev] = useState(false);


  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setcanPrev(emblaApi.canScrollPrev);
  }, [])

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,canPrev
  }
}


export default function EmblaCarousel(props: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  }); //  { loop: false }, [Autoplay()]
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { selectedIndex, scrollSnaps,canPrev } =useDotButton(emblaApi);
  const slider_number = 6;
  const index = slider_number - (scrollSnaps.length - 1) + selectedIndex;
  return (
    <div className="embla ">
      <div className="embla__viewport pb-10" ref={emblaRef}>
        <div className="embla__container">{props.children}</div>
      </div>
      <div className="flex items-start justify-between py-4 border-t border-grey-15">
        <div className="font-medium">
          <span className="text-white">{String(index).padStart(2, '0')}</span>
          <span className="text-grey-60 ms-1.5">of 60</span>
        </div>
        <div>
          <button
            className={`duration-200 ${canPrev
              ? "w-[44px] h-[44px] bg-grey-10 border border-grey-15 rounded-full embla__prev "
              : "w-[44px] h-[44px] border border-grey-15 rounded-full embla__prev"}`}
            onClick={scrollPrev}
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.4004 7.99999C17.4004 8.49705 16.9974 8.89999 16.5004 8.89999L3.73489 8.89999L8.72419 13.6512C9.08248 13.9958 9.09365 14.5655 8.74914 14.9238C8.40463 15.2821 7.83489 15.2933 7.47659 14.9487L0.876594 8.64874C0.700122 8.47905 0.600391 8.2448 0.600391 7.99999C0.600391 7.75517 0.700123 7.52092 0.876594 7.35124L7.47659 1.05124C7.83489 0.706725 8.40463 0.717896 8.74914 1.07619C9.09365 1.43449 9.08248 2.00422 8.72419 2.34874L3.73489 7.09999L16.5004 7.09999C16.9974 7.09999 17.4004 7.50293 17.4004 7.99999Z"
                fill={canPrev ? "white" : "#808080"}
              />
            </svg>
          </button>
          <button
            className="w-[44px] h-[44px] bg-grey-10 border border-grey-15 rounded-full ms-3 embla__next"
            onClick={scrollNext}
          >
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.599609 8.00001C0.599609 7.50295 1.00255 7.10001 1.49961 7.10001L14.2651 7.10001L9.27581 2.34876C8.91752 2.00425 8.90634 1.43451 9.25086 1.07621C9.59537 0.717918 10.1651 0.706747 10.5234 1.05126L17.1234 7.35126C17.2999 7.52094 17.3996 7.75519 17.3996 8.00001C17.3996 8.24483 17.2999 8.47908 17.1234 8.64876L10.5234 14.9488C10.1651 15.2933 9.59537 15.2821 9.25086 14.9238C8.90635 14.5655 8.91752 13.9958 9.27581 13.6513L14.2651 8.90001L1.49961 8.90001C1.00255 8.90001 0.599609 8.49707 0.599609 8.00001Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
