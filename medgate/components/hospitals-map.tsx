"use client"

import { useEffect, useRef, useState } from "react"
import { hospitals } from "@/lib/mockData"

export function HospitalsMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current || isLoaded) return
    
    // Dynamically import leaflet only on client
    import("leaflet").then((L) => {
      // Load CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
      document.head.appendChild(link)
      
      // Hospital coordinates in UAE
      const hospitalCoords: Record<string, [number, number]> = {
        "h1": [25.1242, 55.2183], // Dubai, Al Barsha
        "h2": [25.3548, 55.4164], // Sharjah, Al Majaz
        "h3": [24.4539, 54.3773], // Abu Dhabi, Al Bateen
        "h4": [25.2854, 55.3157], // Dubai, Deira
        "h5": [24.2155, 55.7671], // Al Ain
        "h6": [25.1242, 56.3426], // Fujairah
        "h7": [25.7851, 55.1271], // Ras Al Khaimah
        "h8": [25.3671, 55.4711], // Ajman
      }

      // Initialize map centered on UAE
      const map = L.map(mapRef.current!).setView([24.4539, 54.5260], 7)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map)

      // Custom icon for hospitals
      const customIcon = L.icon({
        iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2306B6D4'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5h-2.5V19h-3v-6.5H6v-3h2.5V7h3v2.5H18v3z'/%3E%3C/svg%3E",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      // Add markers for each hospital
      hospitals.forEach((hospital) => {
        const coords = hospitalCoords[hospital.id]
        if (coords) {
          const marker = L.marker(coords, { icon: customIcon }).addTo(map)
          marker.bindPopup(`
            <div class="font-semibold text-slate-900">${hospital.name}</div>
            <div class="text-sm text-slate-600">${hospital.city}, ${hospital.emirate}</div>
            <div class="text-xs text-slate-500 mt-1">${hospital.departments.slice(0, 2).join(", ")}</div>
          `)
        }
      })

      setIsLoaded(true)
    })
  }, [isLoaded])

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-2xl border border-white/10 shadow-lg bg-slate-800"
      style={{ zIndex: 1 }}
    />
  )
}
