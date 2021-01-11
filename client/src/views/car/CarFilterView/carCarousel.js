import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemsCarousel from 'react-items-carousel';

const CarCarousel = () => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const [carouselData, setCarouselData] = useState([]);
  const chevronWidth = 40;
  const autoPlayDelay = 5000;

	const tick = () => setActiveItemIndex(prevValue => (prevValue + 1));

	useEffect(function() {
		axios.get('/api/car/getCarousel').then(res => {
      setCarouselData(res.data);
      setInterval(tick, autoPlayDelay);
		})
	}, []);
	
	return (
    <div class="g-carousel sponserd">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<span className="fa fa-caret-left slide-prev"></span>}
        rightChevron={<span className="fa fa-caret-right slide-next"></span>}
        outsideChevron
        infiniteLoop
        chevronWidth={chevronWidth}
      >
        {carouselData.map(item => 
          <div class="slider-item">
            <a href='view?AUCTION_ID=<?  echo $list_id;  ?>'>
              <img src={`images/auctions_images/${item.featured_image}`} />
              <div class="carousel-data">
                <p class="headline">{item.name}</p>
                <p class="price">
                  {item.price_on_request==1 ? `${item.listing_price} USD` : "Request More Info"}
                </p>
              </div>
            </a>
          </div>
        )}
      </ItemsCarousel>
    </div>
	);
}

export default CarCarousel;
