import React, { Component, useState } from 'react';
import '../../Assets/css/grandbid.css';
import '../../Assets/css/bootstrap.min.css';
import CarFilter from './CarFilterView';
import CarList from './CarListView/carList';

const CarView = () => {
	
	return (
		
    <main class="main sub-main">
      <div class="category-header">
        <div class="container">
          <CarFilter />
          <CarList />
        </div>
      </div>
    </main>
	);
}

export default CarView;
