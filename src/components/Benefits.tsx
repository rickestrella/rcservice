import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import { Link } from "react-router-dom";
import React from "react";

enum ServiceType {
  Web = "web",
  Tech = "tech",
  Contact = "contact",
}

interface ItemProps {
  id?: string;
  title?: string;
  text?: string;
  backgroundUrl?: string;
  serviceType?: ServiceType;
  light?: boolean;
  imageUrl?: string;
}

function typeOfService(item: ItemProps): string {
  switch (item.serviceType) {
    case ServiceType.Web:
      return "/web-development";
    case ServiceType.Tech:
      return "/tech-support";
    case ServiceType.Contact:
      return "/contact";
    default:
      return "/";
  }
}

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Crece de forma inteligente con RC Service"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-evenly">
          {benefits.map((item: ItemProps) => (
            <Link
              to={typeOfService(item)}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Saber más
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-1">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
              {/* <ClipPath /> */}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
