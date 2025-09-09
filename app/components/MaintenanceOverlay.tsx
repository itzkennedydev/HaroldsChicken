'use client';

import { useState, useEffect } from 'react';

export function MaintenanceOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set to true to enable maintenance mode
    // Change this to false when payment is resolved
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white min-h-screen">
      {/* AWS Header */}
      <div className="mb-8 p-6 mt-32">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="/images/Ap.png" 
              alt="AWS Logo" 
              className="w-48"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 mt-4">
        <div className="max-w-2xl mx-auto">
          <div>
            {/* Content */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                Service Temporarily Unavailable
              </h1>
              <p className="text-lg text-gray-600 mb-4 font-sans text-center">
                We are currently experiencing a service interruption.
              </p>
              
              <h3 className="font-semibold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Arial, sans-serif' }}>Service Details</h3>
              <div className="space-y-3 text-sm text-gray-600 font-sans mb-8">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-black font-medium">SUSPENDED</span>
                </div>
                <div className="flex justify-between">
                  <span>Issue:</span>
                  <span>Account suspension</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span>{new Date().toLocaleString()}</span>
                </div>
              </div>

              <h3 className="font-semibold text-gray-900 mb-4 mt-8" style={{ fontFamily: 'Arial, sans-serif' }}>Support Information</h3>
              <div className="text-sm text-gray-600 space-y-2 font-sans">
                <p>For immediate assistance, please contact:</p>
                <p className="font-mono">support@aws.amazon.com</p>
                <p>Reference: Account #482739156084</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500 font-sans p-6">
        <p>© 2025, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://aws.amazon.com/legal/" className="text-gray-600 hover:text-gray-800">
            Legal
          </a>
          {' • '}
          <a href="https://aws.amazon.com/privacy/" className="text-gray-600 hover:text-gray-800">
            Privacy
          </a>
          {' • '}
          <a href="https://aws.amazon.com/terms/" className="text-gray-600 hover:text-gray-800">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
