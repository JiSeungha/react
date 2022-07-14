/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide = this.state.currentSlide === 0 ? CarouselData.length - 1 : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  render() {
    return (
      <div className="my-8">
        <div className="flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer bg-slate-300 rounded-full z-20"
          />

          <div className="flex w-full h-full relative items-center justify-center z-10">
            <div className="hidden lg:flex w-full h-screen max-h-[1000px] items-center justify-center">
              {CarouselData.map((slide, index) => {
                return (
                  <a
                    href={slide.link}
                    key={index}
                    className={
                      index - 1 === this.state.currentSlide ||
                      (index === 0 && this.state.currentSlide === CarouselData.length - 1)
                        ? "border-2 flex-col flex rounded-lg h-full max-h-[700px] w-[360px] object-cover mx-2 items-end relative bg-no-repeat"
                        : "hidden"
                    }
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  >
                    <div className="h-1/6">
                      <p className="border-2 rounded-lg text-white border-white text-xl m-4 px-4">{slide.time}</p>
                    </div>
                    <div className="h-5/6 w-full items-start flex flex-col justify-end">
                      <b className="text-white text-3xl px-2">{slide.title}</b>
                      <p className="text-white text-xl px-2 mb-2 text-ellipsis overflow-hidden">{slide.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex w-full h-screen max-h-[1000px] items-center justify-center">
              {CarouselData.map((slide, index) => {
                return (
                  <a
                    href={slide.link}
                    key={index}
                    className={
                      index === this.state.currentSlide
                        ? "border-2 flex-col flex rounded-lg h-full max-h-[700px] w-[360px] object-cover mx-2 items-end relative bg-no-repeat"
                        : "hidden"
                    }
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  >
                    <div className="h-1/6">
                      <p className="border-2 rounded-lg text-white border-white text-xl m-4 px-4">{slide.time}</p>
                    </div>
                    <div className="h-5/6 w-full items-start flex flex-col justify-end">
                      <b className="text-white text-3xl px-2">{slide.title}</b>
                      <p className="text-white text-xl px-2 mb-2 text-ellipsis overflow-hidden">{slide.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex w-full h-screen max-h-[1000px] items-center justify-center">
              {CarouselData.map((slide, index) => {
                return (
                  <a
                    href={slide.link}
                    key={index}
                    className={
                      index + 1 === this.state.currentSlide ||
                      (index === CarouselData.length - 1 && this.state.currentSlide === 0)
                        ? "border-2 flex-col flex rounded-lg h-full max-h-[700px] w-[360px] object-cover mx-2 items-end relative bg-no-repeat"
                        : "hidden"
                    }
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  >
                    <div className="h-1/6">
                      <p className="border-2 rounded-lg text-white border-white text-xl m-4 px-4">{slide.time}</p>
                    </div>
                    <div className="h-5/6 w-full items-start flex flex-col justify-end">
                      <b className="text-white text-3xl px-2">{slide.title}</b>
                      <p className="text-white text-xl px-2 mb-2 text-ellipsis overflow-hidden">{slide.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer bg-slate-300 rounded-full z-20"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
