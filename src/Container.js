import React from 'react';
import Leftbox from './Leftbox';
import Rightbox from './Rightbox';
import Footer from './Footer';
import './Main.css';


export default function Container() {
  return (
    <div>
        <Leftbox />
        <Rightbox />
        <Footer />
    </div>
  );
}
