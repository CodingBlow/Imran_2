import React from "react";
import { Card } from "@/components/ui/card";

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Information We Collect
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>When you use our services, we may collect:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information</li>
              <li>Delivery address</li>
              <li>Phone number and email address</li>
              <li>Service preferences and history</li>
              <li>Payment information</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            How We Use Your Information
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your rental requests</li>
              <li>Communicate about services and updates</li>
              <li>Improve our service quality</li>
              <li>Send important notifications about your rentals</li>
              <li>Provide customer support</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Information Security
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We implement security measures to protect your personal
              information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Secure data storage systems</li>
              <li>Limited access to personal information</li>
              <li>Regular security assessments</li>
              <li>Encrypted data transmission</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Information Sharing
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>We may share your information with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Delivery partners for service fulfillment</li>
              <li>Payment processors for transactions</li>
              <li>Service providers who assist our operations</li>
            </ul>
            <p className="mt-4">
              We never sell your personal information to third parties.
            </p>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Your Rights
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request data correction</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data deletion</li>
            </ul>
          </div>
        </Card>

        <Card className="p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-primary">
            Contact Us
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>For privacy-related inquiries, contact us at:</p>
            <div className="bg-white p-6 rounded-lg shadow-sm">

  <ul className="space-y-5 text-gray-600 text-sm">

    <li className="flex items-start gap-3">
      <span className="text-blue-600 mt-1">📧</span>
      <span>info@smarteager.com</span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-green-600 mt-1">📞</span>
      <div>
        <p>+91 7419011364</p>
        <p>+91 7419011361</p>
      </div>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-red-600 mt-1">📍</span>
      <div className="space-y-3">
        <p>
          <span className="font-semibold text-gray-800">Head Office:</span><br/>
          Phase-06, Hariom Kunj, Palwal Road, Sohna, Gurugram (HR) - 122103
        </p>

        <p>
          <span className="font-semibold text-gray-800">Workshop-1:</span><br/>
          Teekli Road, Noorpur Mor, City-Badshahpur, Gurugram (HR) - 122101
        </p>

        <p>
          <span className="font-semibold text-gray-800">Workshop-2:</span><br/>
          Phase-06, Hariom Kunj, Palwal Road, Sohna, Gurugram (HR) - 122103
        </p>
      </div>
    </li>

  </ul>
</div>
          </div>
        </Card>

        <div className="text-center text-gray-600 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
