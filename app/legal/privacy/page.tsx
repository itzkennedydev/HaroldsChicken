import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export const metadata = {
  title: "Privacy Policy - Harold's Chicken & Sports Bar",
  description: "Comprehensive Privacy Policy and data handling information for Harold's Chicken & Sports Bar",
};

const LastUpdatedBanner = ({ date }) => (
  <div className="bg-slate-50 border border-slate-200 dark:bg-slate-900/10 dark:border-slate-800/50 dark:text-slate-400 rounded-lg p-4 mb-8">
    <p className="text-sm text-slate-600 dark:text-slate-400">
      Last updated: {date}
    </p>
  </div>
);

const Section = ({ title, children, important }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {important ? (
      <Alert variant="warning" className="mb-4">
        <AlertDescription>
          This section contains important information about your privacy rights.
        </AlertDescription>
      </Alert>
    ) : null}
    <div className="space-y-4">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>

        <LastUpdatedBanner date={new Date().toLocaleDateString()} />

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-lg text-muted-foreground">
            At Harold&apos;s Chicken & Sports Bar, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
          </p>

          <Section title="1. Information We Collect" important={true}>
            <h4 className="font-semibold">Personal Information:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Age verification for alcohol purchases</li>
              <li>Account credentials</li>
            </ul>

            <h4 className="font-semibold mt-4">Automatically Collected Information:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information (IP address, browser type, device type)</li>
              <li>Usage data (pages visited, time spent, interactions)</li>
              <li>Location data (with your permission)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information" important={false}>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support</li>
              <li>Sending order confirmations and updates</li>
              <li>Improving our services and user experience</li>
              <li>Personalizing your experience and recommendations</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Preventing fraud and maintaining security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </Section>

          <Section title="3. Legal Basis for Processing" important={true}>
            <p>We process your personal information based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contract fulfillment (processing your orders)</li>
              <li>Legal obligations (tax, business records)</li>
              <li>Legitimate interests (improving our services)</li>
              <li>Your consent (marketing communications)</li>
            </ul>
          </Section>

          <Section title="4. Information Sharing and Disclosure" important={false}>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers (payment processors, delivery services)</li>
              <li>Analytics and advertising partners</li>
              <li>Law enforcement (when required by law)</li>
            </ul>
            <p className="mt-4">
              We do not sell or rent your personal information to third parties.
            </p>
          </Section>

          <Section title="5. Cookies and Tracking Technologies" important={true}>
            <p>We use various tracking technologies to improve your experience:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies to understand usage</li>
              <li>Advertising cookies for relevant promotions</li>
            </ul>
            <p className="mt-4">
              You can manage cookie preferences through your browser settings.
            </p>
          </Section>

          <Section title="6. Data Security" important={false}>
            <p className="font-semibold mb-4">We protect your data using:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption during transmission</li>
              <li>Secure data storage systems</li>
              <li>Regular security assessments</li>
              <li>Employee access controls</li>
              <li>Industry-standard security protocols</li>
            </ul>
          </Section>

          <Section title="7. Your Privacy Rights" important={true}>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </Section>

          <Section title="8. Data Retention" important={false}>
            <p>
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
          </Section>

          <Section title="9. Children&apos;s Privacy" important={false}>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </Section>

          <Section title="10. Changes to Privacy Policy" important={false}>
            <p>
              We may update this Privacy Policy periodically. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the new policy on our website</li>
              <li>Sending an email notification</li>
              <li>Displaying a prominent notice on our services</li>
            </ul>
          </Section>

          <Section title="11. Contact Information" important={false}>
            <p>
              For privacy-related inquiries, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 dark:bg-slate-900/10 dark:border-slate-800/50 dark:text-slate-400 rounded-lg">
              <p>Privacy Officer</p>
              <p>Harold&apos;s Chicken & Sports Bar</p>
              <p>[Address]</p>
              <p>Email: [privacy@example.com]</p>
              <p>Phone: [phone number]</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}