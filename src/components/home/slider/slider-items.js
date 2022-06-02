import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "./slider-item.css";
import InfoCity from "./info-city";
function Slider() {
  let sliderCities = [
    "Kyiv",
    "Barcelona",
    "New York",
    "Reykjavik",
    "Berlin",
    "Vancouver",
    "Toronto",
  ];

  return (
    <Carousel>
      {sliderCities.map((city) => {
        return (
          <Carousel.Item interval={3000} key={city}>
            <img
              className="d-block w-100"
              src={`https://source.unsplash.com/random/?${city}?orientation=landscape?ordered_by=relevant`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="bg-gray">{city}</h3>
              <InfoCity name={city} />
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
