import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export const metadata = {
  title: "Terms of Service - Harold's Chicken & Sports Bar",
  description: "Comprehensive Terms of Service and legal information for Harold's Chicken & Sports Bar",
};

interface LastUpdatedBannerProps {
  date: string;
}

const LastUpdatedBanner = ({ date }: LastUpdatedBannerProps) => (
  <div className="bg-muted p-4 rounded-lg mb-8">
    <p className="text-sm text-muted-foreground">
      Last updated: {date}
    </p>
  </div>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
  important?: boolean;
}

const Section = ({ title, children, important = false }: SectionProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {important ? (
      <Alert variant="warning" className="mb-4">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          This section contains important information about your legal rights and obligations.
        </AlertDescription>
      </Alert>
    ) : null}
    <div className="space-y-4">{children}</div>
  </div>
);

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-[#202124]">
          Terms of Service
        </h1>
        
        <LastUpdatedBanner date={new Date().toLocaleDateString()} />

        <div className="prose prose-gray max-w-none space-y-8">
          <p className="text-lg text-[#333536]">
            Welcome to Harold&apos;s Chicken & Sports Bar. These Terms of Service (&quot;Terms&quot;) govern your use of our website, mobile applications, and services. Please read these terms carefully before using our services.
          </p>

          <Section title="1. Acceptance of Terms" important={false}>
            <p>
              By accessing or using Harold&apos;s Chicken & Sports Bar&apos;s website, mobile applications, and services (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our Services.
            </p>
          </Section>

          <Section title="2. Use License" important={true}>
            <p>
              Permission is granted to temporarily access and use our Services for personal, non-commercial purposes. This license does not include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifying or copying our materials</li>
              <li>Using materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </Section>

          <Section title="3. Online Ordering and Payment" important={true}>
            <p>
              When placing orders through our Services, you agree to provide current, complete, and accurate information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintaining the confidentiality of your account</li>
              <li>Ensuring accurate delivery information</li>
              <li>All charges incurred under your account</li>
            </ul>
            <p className="mt-4">
              We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion.
            </p>
          </Section>

          <Section title="4. Alcohol Service and Age Verification" important={true}>
            <p>
              For alcohol purchases and sports bar services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Valid ID showing age 21+ is required for alcohol service</li>
              <li>We reserve the right to refuse service</li>
              <li>Alcohol cannot be ordered for delivery through our online services</li>
            </ul>
          </Section>

          <Section title="5. Privacy and Data Protection" important={false}>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our Services, you agree to our Privacy Policy, which is incorporated into these Terms by reference.
            </p>
          </Section>

          <Section title="6. Intellectual Property" important={true}>
            <p>
              The Service and its original content, features, and functionality are owned by Harold&apos;s Chicken & Sports Bar and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </Section>

          <Section title="7. User Responsibilities" important={false}>
            <p>
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use our Services for unlawful purposes</li>
              <li>Harass, abuse, or harm others</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with security features</li>
              <li>Generate excessive traffic to our Services</li>
            </ul>
          </Section>

          <Section title="8. Disclaimer of Warranties" important={true}>
            <p>
              Our Services are provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee that our Services will be uninterrupted, secure, or error-free.
            </p>
          </Section>

          <Section title="9. Limitation of Liability" important={false}>
            <p>
              Harold&apos;s Chicken & Sports Bar shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use our Services</li>
              <li>Unauthorized access to your account</li>
              <li>Statements or conduct of third parties</li>
              <li>Food allergies or dietary restrictions</li>
            </ul>
          </Section>

          <Section title="10. Indemnification" important={false}>
            <p>
              You agree to indemnify and hold Harold&apos;s Chicken & Sports Bar harmless from any claims, losses, liability, damages, and expenses arising from your use of the Services or violation of these Terms.
            </p>
          </Section>

          <Section title="11. Modifications to Terms" important={false}>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our Services constitutes acceptance of modified Terms.
            </p>
          </Section>

          <Section title="12. Governing Law" important={false}>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the state where our primary business operations are located, without regard to its conflict of law provisions.
            </p>
          </Section>

          <Section title="13. Contact Information" important={false}>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p>Harold&apos;s Chicken & Sports Bar</p>
              <p>[Address]</p>
              <p>Email: [contact email]</p>
              <p>Phone: [phone number]</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}