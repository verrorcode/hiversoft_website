import type { Metadata } from 'next';

// Metadata for SEO (Next.js 13 App Router style)
export const metadata: Metadata = {
  title: 'Hiversoft Privacy Policy',
  description: 'Hiversoft’s privacy policy outlining data collection and usage practices, compatible with LinkedIn and social media advertising.',
  openGraph: {
    title: 'Hiversoft Privacy Policy',
    description: 'Learn how Hiversoft handles your data for services and advertising on platforms like LinkedIn.',
    url: '/privacy-policy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Hiversoft Privacy Policy
        </h1>
        <p className="text-sm text-gray-600 text-center mb-8">
          Last Updated: February 23, 2025
        </p>

        <section className="space-y-8 text-gray-700">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
            <p>
              At Hiversoft, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with our advertisements on social media platforms like LinkedIn, Facebook, and Twitter. By engaging with us, you consent to the practices described herein.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, and other details provided when downloading resources (e.g., eBooks) or engaging with ads (e.g., LinkedIn Lead Gen Forms).
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, device info, and interaction data collected automatically via our website or ads.
              </li>
              <li>
                <strong>Social Media Data:</strong> Information from platforms like LinkedIn when you interact with our ads or connect through social logins.
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliver services, such as eBooks or customer support.</li>
              <li>Send marketing emails and promotions (with opt-out options).</li>
              <li>Manage and optimize ad campaigns on LinkedIn and other platforms.</li>
              <li>Analyze site usage to improve our offerings.</li>
              <li>Meet legal requirements or protect our rights.</li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Sharing Your Information</h2>
            <p>We may share your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third parties for analytics, email delivery, or ad tracking (e.g., Google Analytics, LinkedIn Insight Tag), under strict confidentiality.
              </li>
              <li>
                <strong>Social Media Platforms:</strong> Data shared via ad interactions is processed per their policies (e.g., LinkedIn Privacy Policy).
              </li>
              <li>
                <strong>Legal Entities:</strong> When required by law or to defend our interests.
              </li>
            </ul>
            <p>We do not sell your personal information.</p>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies, pixels (e.g., LinkedIn Insight Tag), and similar tools to enhance your experience, track ad performance, and deliver targeted ads. You can adjust cookie settings in your browser or opt-out via platform ad preferences (e.g., LinkedIn Ad Settings).
            </p>
          </div>

          {/* Social Media Advertising */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Social Media Advertising</h2>
            <p>
              Our ads on LinkedIn, Facebook, Twitter, and other platforms may collect data through lead forms or tracking technologies. This helps us measure campaign success and refine targeting. See each platform’s privacy policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LinkedIn Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Facebook Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Twitter Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Opt-out of marketing via email unsubscribe links.</li>
              <li>Request information about our data practices.</li>
            </ul>
            <p>
              Contact us at <a href="mailto:privacy@hiversoft.com" className="text-blue-600 hover:underline">privacy@hiversoft.com</a> to exercise these rights.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Retention</h2>
            <p>
              We keep your data only as long as needed for the purposes described here or as required by law (e.g., up to 2 years for ad leads unless you request deletion).
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Security</h2>
            <p>
              We use robust security measures to protect your data, though no system is entirely immune to risks.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
            <p>
              We may update this policy, with changes posted here and marked with a new “Last Updated” date. Check back periodically.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>
              For questions, reach out to:
            </p>
            <p className="mt-2 mb-20">
              Hiversoft<br />
              Email: <a href="mailto:privacy@hiversoft.com" className="text-blue-600 hover:underline">support@hiversoft.com</a><br />
             
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}