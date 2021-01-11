import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../Assets/css/grandbid.css';

const CarListView = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
		axios.get('/api/car/getList').then(res => {
      setCars(res.data);
		})
  }, []);
	
	return (
    <div class="row">
        <div class="col-12">
            <h3 class="heading-bullet">
                <span>Featured luxury Cars for sale</span>
                <a class="g-view" href="result?cid=4">View all</a>
            </h3>
            <div class="row">
              {cars.map(item => 
                  <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="grand-card">
                            <a href="view?AUCTION_ID=16" class="g-image">
                                <img src={`images/auctions_images/${item.featured_image}`} />
                            </a>
                            <div class="g-card-header">
                                <p class="g-title">{item.name}</p>
                                <div class="flag-cont">
                                    <img src={`images/${item.flag_img}`} width="20" height="13" />
                                </div>
                            </div>
                            <div class="g-data">
                                <div class="col-12">
                                    <p class="g-data-title">Price :</p>
                                    <div class="g-data-value">
                                        <div class="price">
                                            <p>
                                              {item.price_on_request==1 ? `${item.listing_price} USD` : "Request More Info"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
	);
}

export default CarListView;