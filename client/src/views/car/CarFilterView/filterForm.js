import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../Assets/css/grandbid.css';

const FilterForm = () => {
    const [years, setYears] = useState([]);
    const [filter0, setFilter0] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(function() {
        axios.get('/api/car/getYears').then(res => { setYears(res.data) })
        axios.get('/api/car/getFilter0').then(res => { setFilter0(res.data) })
        axios.get('/api/car/getFilters').then(res => { setFilters(res.data) })
	}, []);
	
	return (
      <div class="filter-category">
          <p className="text-center">
              <span style={{fontSize: '18px'}}><strong>Luxury cars for you</strong></span>
          </p>

          <p className="text-center"><a href="http://shama-it.com/projects/grandbid/result?cid=4&amp;Auc_parent_category=4">View All Cars</a></p>
          <h4 calss="text-bold">Cars for sale</h4>
          <form action="result?cid=4&amp;Auc_parent_category=4" method="post">
              <div class="form-group">
                  <select class="form-control select-plugin" name="filter1" id="filter1" onchange="UpdateSubFilters();">
                      {filter0.map(item => 
                            <option value={item.id} selected>ALL {item.name}</option>
                        )}
                      {filters.map(item => 
                            <option value={item.id}>{item.name}</option>
                        )}
                  </select>
              </div>

              <input type="hidden" name="filters_count" id="filters_count" value="1" />
              <div class="row">
                  <div class="col-6">
                      <div class="form-group">
                          <select class="form-control select-plugin" name="yearFrom" id="yearFrom">
                              <option value="0">From any year</option>
                              {years.map(item => 
                                    <option value={item.id}>{item.name}</option>  
                                )}
                          </select>
                      </div>
                  </div>
                  <div class="col-6">
                      <div class="form-group">
                          <select class="form-control select-plugin" name="yearTo" id="yearTo">
                              <option value="0">To any year</option>
                              {years.map(item => 
                                <option value={item.id}>{item.name}</option>  
                                )}
                          </select>
                      </div>
                  </div>
              </div>

              <div class="form-group">
                  <button type="submit" class="btn g-btn btn-primary">Find Listings</button>
              </div>
          </form>
          <p class="text-muted"></p>
          <p>GrandBid is the luxury marketplace to find new and preowned luxury, exotic and classic cars for sale. Search more than 1,000 luxury cars, exotic cars, classic cars and other supercars with large, high quality images.</p>
          <p></p>
      </div>
	);
}

export default FilterForm;
