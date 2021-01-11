import React, { Component, useState } from 'react';
import '../../../Assets/css/grandbid.css';
import CarCarousel from './carCarousel';
import FilterForm from './filterForm';

const CarFilter = () => {
	
	return (
    <div class="row centerd">
      <div class="col-md-6">
        <CarCarousel />
      </div>
      <div class="col-md-6">
        <FilterForm />
      </div>
    </div>
	);
}

export default CarFilter;
