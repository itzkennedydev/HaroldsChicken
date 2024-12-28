"use client";

import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { Switch } from "@/app/components/ui/switch";

// Metadata moved to separate file

interface LastUpdatedBannerProps {
  date: string;
}

const LastUpdatedBanner = ({ date }: LastUpdatedBannerProps) => (
  <div className="bg-slate-50 border border-slate-200 dark:bg-slate-900/10 dark:border-slate-800/50 dark:text-slate-400 rounded-lg p-4 mb-8">
    <p className="text-sm text-slate-600 dark:text-slate-400">
      Last updated: {date}
    </p>
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
  important?: boolean;
}

const Section = ({ title, children, important }: SectionProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {important ? (
      <Alert variant="warning" className="mb-4">
        <AlertDescription>
          This section contains important information about cookies that affect your browsing experience.
        </AlertDescription>
      </Alert>
    ) : null}
    <div className="space-y-4">{children}</div>
  </div>
);

interface CookiePreferenceProps {
  title: string;
  description: string;
  required?: boolean;
}

const CookiePreference = ({ title, description, required = false }: CookiePreferenceProps) => {
  const [enabled, setEnabled] = useState(required);
  
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="space-y-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Switch 
        checked={enabled}
        onCheckedChange={setEnabled}
        disabled={required}
        className="ml-4"
      />
    </div>
  );
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Cookie Policy
        </h1>

        <LastUpdatedBanner date={new Date().toLocaleDateString()} />

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-lg text-muted-foreground">
            This Cookie Policy explains how Harold&apos;s Chicken & Sports Bar uses cookies and similar technologies to recognize you when you visit our website and applications. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <Section title="1. What Are Cookies" important>
            <div className="bg-slate-50 border border-slate-200 dark:bg-slate-900/10 dark:border-slate-800/50 dark:text-slate-400 rounded-lg p-4">
              <div>
                <p className="font-medium">Cookies are small data files that are placed on your computer or mobile device when you visit a website.</p>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Cookies are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
                </p>
              </div>
            </div>
          </Section>

          <Section title="2. Cookie Management Preferences" important>
            <p className="mb-4">You can customize your cookie preferences below:</p>
            <div className="space-y-4">
              <CookiePreference
                title="Essential Cookies"
                description="Required for basic site functionality. These cookies cannot be disabled."
                required={true}
              />
              <CookiePreference
                title="Performance & Analytics"
                description="Help us improve our website by collecting anonymous usage information."
              />
              <CookiePreference
                title="Functionality Cookies"
                description="Enable enhanced features and personalization."
              />
              <CookiePreference
                title="Targeting & Advertising"
                description="Allow us to deliver personalized advertisements."
              />
            </div>
          </Section>

          <Section title="3. Types of Cookies We Use">
            <div className="space-y-6">
              <div className="p-4 border rounded-lg">
                <h4 className="text-lg font-medium mb-2">Essential Cookies</h4>
                <p className="text-sm text-muted-foreground">Examples include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Authentication and security cookies</li>
                  <li>Shopping cart functionality</li>
                  <li>Load balancing session cookies</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="text-lg font-medium mb-2">Performance Cookies</h4>
                <p className="text-sm text-muted-foreground">Examples include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Google Analytics cookies</li>
                  <li>Page load time tracking</li>
                  <li>User behavior analytics</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="text-lg font-medium mb-2">Functionality Cookies</h4>
                <p className="text-sm text-muted-foreground">Examples include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Language preferences</li>
                  <li>Location-based content</li>
                  <li>Personalized user interfaces</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="text-lg font-medium mb-2">Marketing Cookies</h4>
                <p className="text-sm text-muted-foreground">Examples include:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Advertising platform cookies</li>
                  <li>Social media integration</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="4. Third-Party Cookies" important>
            <p>We use cookies from the following third parties:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Payment processors for secure transactions</li>
              <li>Social media platforms for content sharing</li>
              <li>Advertising partners for targeted marketing</li>
            </ul>
            <Alert variant="warning" className="mt-4">
              <AlertDescription>
                Third-party cookies are controlled by their respective providers and are subject to their own privacy policies.
              </AlertDescription>
            </Alert>
          </Section>

          <Section title="5. Managing Your Cookie Preferences">
            <p>You can control cookies through:</p>
            <div className="space-y-4 mt-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Browser Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Most web browsers allow you to control cookies through their settings preferences. Look for cookie settings in your browser&apos;s &quot;Options&quot; or &quot;Preferences&quot; menu.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Our Cookie Management Tool</h4>
                <p className="text-sm text-muted-foreground">
                  Use our cookie preferences panel above to customize your cookie settings on our website.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Third-Party Tools</h4>
                <p className="text-sm text-muted-foreground">
                  You can opt out of third-party cookies using tools provided by various privacy organizations and advertising initiatives.
                </p>
              </div>
            </div>
          </Section>

          <Section title="6. Cookie Expiration">
            <p>Cookies on our website last for different periods:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session Cookies: Deleted when you close your browser</li>
              <li>Persistent Cookies: Remain for a set period (usually 30-90 days)</li>
              <li>Authentication Cookies: Typically expire after 2 weeks</li>
            </ul>
          </Section>

          <Section title="7. Updates to Cookie Policy">
            <p>
              We may update this Cookie Policy periodically. Changes will be effective immediately upon posting to our website. We will notify you of any material changes through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Website notifications</li>
              <li>Email updates (for registered users)</li>
              <li>Cookie consent banner updates</li>
            </ul>
          </Section>

          <Section title="8. Contact Information">
            <p>
              For questions about our Cookie Policy or cookie preferences, contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-50 border border-slate-200 dark:bg-slate-900/10 dark:border-slate-800/50 dark:text-slate-400 rounded-lg">
              <p>Data Privacy Team</p>
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