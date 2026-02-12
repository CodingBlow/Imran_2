import React from "react";

import windowImg from "../images/Screenshot 2026-02-12 224233.png";
import splitImg from "../images/AC-Repair-Slide1.jpg";
import vrvImg from "../images/Screenshot 2026-02-12 224521.png";

const whatsappNumber = "917419011364";

const sendToWhatsapp = (plan: string) => {
  const message = `Hello Smart Eager, I want to purchase ${plan}. Please share full details.`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

export const AcAmcService = () => {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">

      {/* ================= HEADING ================= */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Trusted AMC Service: Annual Maintenance for Top AC Brands in Gurugram
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Smart Eager Aircon is always committed to serve customers by providing the most affordable services.
      </p>


      {/* ================= PRICING SECTION ================= */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Window AC AMC</h2>

          <p>Basic (1 Year) – ₹2499</p>
          <button
            onClick={() => sendToWhatsapp("Window AC AMC Basic (1 Year)")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2 mb-4"
          >
            Buy Now
          </button>

          <p>Advanced (1 Year) – ₹3299</p>
          <button
            onClick={() => sendToWhatsapp("Window AC AMC Advanced (1 Year)")}
            className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded mt-2"
          >
            Buy Now
          </button>
        </div>


        <div className="border p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Split AC AMC</h2>

          <p>Basic (1 Year) – ₹2999</p>
          <button
            onClick={() => sendToWhatsapp("Split AC AMC Basic (1 Year)")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2 mb-4"
          >
            Buy Now
          </button>

          <p>Advanced (1 Year) – ₹3999</p>
          <button
            onClick={() => sendToWhatsapp("Split AC AMC Advanced (1 Year)")}
            className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded mt-2"
          >
            Buy Now
          </button>
        </div>

      </div>


      {/* ================= FEATURE TABLE ================= */}
      <h2 className="text-2xl font-semibold mb-6">AMC Feature Comparison</h2>

      <div className="overflow-auto mb-16">
        <table className="w-full border text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="border p-2">Name Of The Feature</th>
              <th className="border p-2">Comprehensive AMC</th>
              <th className="border p-2">Non-Comprehensive AMC</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {[
              "Scheduled Maintenance",
              "Labour Charges",
              "Emergency Repairs",
              "Gas Refilling",
              "Fixed AMC Annual Price",
              "Surprise Costs",
              "2 maintenance services using power jet",
              "Up to 2 free gas charging, if required",
              "Unlimited breakdown support",
              "Free transportation for repairs",
              "Service charge coverage for a year",
              "Free replacement of faulty parts",
              "Drain pipe cleaning",
            ].map((feature, i) => (
              <tr key={i}>
                <td className="border p-2">{feature}</td>
                <td className="border p-2">Yes</td>
                <td className="border p-2">Yes</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* ================= SERVICE CARDS WITH IMAGES ================= */}
      <h2 className="text-2xl font-semibold text-center mb-8">
        We Offer Wide Range of AMC Service
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-16">

        {/* Window */}
        <div className="shadow-lg rounded-lg p-6 text-center">
          <img src={windowImg} alt="Window AMC" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="font-semibold mb-2">Window AC AMC</h3>
          <p className="text-sm mb-4">
            High efficiency residential and commercial AC maintenance services.
          </p>
          <button
            onClick={() => sendToWhatsapp("Window AC AMC")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Buy Now
          </button>
        </div>

        {/* Split */}
        <div className="shadow-lg rounded-lg p-6 text-center">
          <img src={splitImg} alt="Split AMC" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="font-semibold mb-2">Split AC AMC</h3>
          <p className="text-sm mb-4">
            Complete dry and jet wash services for long life and fresh cooling.
          </p>
          <button
            onClick={() => sendToWhatsapp("Split AC AMC")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Buy Now
          </button>
        </div>

        {/* VRV */}
        <div className="shadow-lg rounded-lg p-6 text-center">
          <img src={vrvImg} alt="VRV AMC" className="w-full h-48 object-cover rounded mb-4" />
          <h3 className="font-semibold mb-2">VRV / VRF AC AMC</h3>
          <p className="text-sm mb-4">
            Professional diagnosis and repair of VRV / VRF systems.
          </p>
          <button
            onClick={() => sendToWhatsapp("VRV / VRF AMC Service")}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Buy Now
          </button>
        </div>

      </div>


{/* ================= TERMS & CONDITIONS ================= */}

<h2 className="text-2xl font-semibold mb-6">
  Annual Maintenance Contract (AMC) Terms and Conditions
</h2>

<ol className="list-decimal pl-6 space-y-4 text-sm leading-relaxed mb-16">

  <li>
    <strong>Contract Validity:</strong> The AMC is valid for 1 year from the date of Purchase Order as per guideline.
  </li>

  <li>
    <strong>Quotation Validity:</strong> The quotation is valid for 30 days from the date of application. If not accepted, it automatically cancels.
  </li>

  <li>
    <strong>Summer Maintenance:</strong> If additional service is required, it may be provided during summer months (as per need of ACs).
  </li>

  <li>
    <strong>Payment Terms:</strong> 100% advance payment is due within 30 days of invoice submission (as per agreement).
  </li>

  <li>
    <strong>Service Hours:</strong> Service work may be performed at night till 9:00 PM (as per need or urgency of ACs).
  </li>

  <li>
    <strong>Repair and Replacement:</strong> We will attempt to repair products; if repair is not possible, we will replace the product, and the non-working part will become Smart Eager Aircon property.
  </li>

  <li>
    <strong>Fault Removal:</strong> All faults will be removed during servicing ensuring customer satisfaction.
  </li>

  <li>
    <strong>Breakdown Response:</strong> Breakdowns will be attended within 24 working hours.
  </li>

  <li>
    <strong>Damaged Parts:</strong> Replaced or repaired spare parts will become Smart Eager Aircon property.
  </li>

  <li>
    <strong>Transportation Damage:</strong> Damage to products or parts during transportation or shifting is not covered under this contract.
  </li>

  <li>
    <strong>Contract Transfer:</strong> The contract is non-transferable in the event of resale.
  </li>

  <li>
    <strong>Cancellation:</strong> No refund will be given if the customer cancels the contract before completion.
  </li>

  <li>
    <strong>Emergency Response:</strong> While we prioritize emergency breakdowns, we will not be held responsible for any resulting losses.
  </li>

  <li>
    <strong>Exclusions:</strong> We do not cover repairs/services due to improper use, unauthorized alterations, or natural causes.
  </li>

  <li>
    <strong>Additional Services:</strong> If services are required due to the above causes, additional service may be provided during summer months (as per need of ACs).
  </li>

</ol>


    {/* ================= VRF / VRV SERVICE ================= */}

<h2 className="text-2xl font-semibold text-red-600 mb-6">
  VRF / VRV Service
</h2>

<p className="mb-4 text-sm leading-relaxed">
  Installing a VRV or VRF system requires expertise and precision. We:
</p>

<ul className="list-disc pl-6 text-sm space-y-2 mb-6">
  <li>Conduct site inspections to design the ideal layout.</li>
  <li>Install outdoor and indoor units efficiently.</li>
  <li>Ensure proper refrigerant piping and electrical connections for optimal performance.</li>
</ul>

<p className="mb-4 text-sm leading-relaxed">
  Facing issues like poor cooling, heating, or unusual noises? Our repair services include:
</p>

<ul className="list-disc pl-6 text-sm space-y-2 mb-6">
  <li>Diagnosing and fixing refrigerant flow issues.</li>
  <li>Resolving electrical malfunctions.</li>
  <li>Replacing damaged components like compressors, fans, and sensors.</li>
</ul>

<p className="mb-4 text-sm leading-relaxed">
  Low refrigerant levels can reduce efficiency. We:
</p>

<ul className="list-disc pl-6 text-sm space-y-2 mb-6">
  <li>Check refrigerant levels accurately.</li>
  <li>Refill gas as per system specifications.</li>
  <li>Ensure no leaks in the refrigerant piping.</li>
</ul>

<p className="mb-4 text-sm leading-relaxed">
  Preventive maintenance is essential for optimal performance. Our services include:
</p>

<ul className="list-disc pl-6 text-sm space-y-2 mb-12">
  <li>Cleaning filters, ducts, and coils.</li>
  <li>Inspecting electrical and mechanical components.</li>
  <li>Regular system performance checks.</li>
</ul>

    </div>
  );
};