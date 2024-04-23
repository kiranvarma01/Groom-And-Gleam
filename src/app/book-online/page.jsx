"use client"

import { useState, useEffect } from "react";
import services from "../components/services.json"
import TabsComponent from "../components/tabsComponent";


export default function BookOnline() {
    return (
      <div>
        <div className="text-3xl font-bold pt-20 flex justify-center items-center w-screen">
          <h1>Our Services</h1>
        </div>
        <TabsComponent/>
      </div>
    );
  }