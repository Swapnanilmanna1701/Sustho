"use client"
import './globals.css';
import { useState } from "react";

import './grads.css'
import "react-toastify/dist/ReactToastify.css";
import Parent from "@/components/screenshot/parent/Parent";


const Home =()=> {
    const [img, setImg] = useState();
    return (
      <>
      <Parent img={img} />
      </>
    );
  }
export default Home;