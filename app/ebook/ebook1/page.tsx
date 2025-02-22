"use client";
import { useState } from 'react';
import { BookOpen, Download, Mail, User, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
export default function EbookDownloadPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<"loading" | "error" | "idle" | "success">("idle");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Create form data for Google Sheets
      const params = new URLSearchParams({
        name: name.trim(),
        email: email.trim(),
        type: 'ebook_download'
      });
      // Use existing Google Sheets integration URL
      const url = `https://script.google.com/macros/s/AKfycbxU9Akyq-3Xnv_wSL2lsYLG9GNNCXY4yg6jLmUPgfBmQfBVHUXqyPdBQr8cKkRWXyxr1A/exec?${params.toString()}`;
      // Submit to Google Sheets
      await fetch(url, {
        method: 'GET',
        mode: 'no-cors'
      });
      // Trigger E-book opening in new tab
      window.open('https://static.hiversoft.com/AI-Implementation-Guide.pdf', '_blank');
      // Show success state
      setStatus('success');
      // Reset form
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-10 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            The Ultimate Guide to AI Implementation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your business with our comprehensive AI implementation guide.
            Join 5000+ business leaders who have already downloaded this resource.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Book Preview */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <div className="relative bg-white p-8 rounded-2xl shadow-xl">
              <div className="mb-8 flex justify-center items-center">
                <Image
                  src="/images/ebook/e2.jpg"
                  alt="AI Implementation Guide"
                  width={400}
                  height={500}
                  className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Inside the Guide:</h3>
                <ul className="space-y-4">
                  {[
                    'Complete AI Implementation Framework',
                    'ROI Calculator Templates',
                    '10+ Real-world Case Studies',
                    'Expert Tips & Best Practices',
                    'Common Pitfalls to Avoid'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-700">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right side - Download Form */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300">
              {status !== 'success' ? (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                      Get Your Free Guide
                    </h2>
                    <p className="text-gray-600">
                      Join 5000+ business leaders who are transforming their companies
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative rounded-lg shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block w-full pl-10 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Email
                        </label>
                        <div className="relative rounded-lg shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full pl-10 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-white border-2 border-gray-800 text-gray-900 py-4 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                    >
                      {status === 'loading' ? 'Processing...' : (
                        <>
                          <Download className="w-5 h-5 text-gray-900" />
                          <span>Get Instant Access</span>
                          <ArrowRight className="w-5 h-5 text-gray-900" />
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-600 text-center">Failed to process request. Please try again.</p>
                    )}
                    <div className="flex items-center justify-center space-x-4 pt-4">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">Free Access</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">Instant Access</span>
                      </div>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center space-y-6 py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h2>
                    <p className="text-gray-600 mb-6">
                      Your guide has opened in a new tab.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Get another copy
                    </button>
                  </div>
                </div>
              )}
              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-center text-gray-600">
                  {'A comprehensive guide that transformed our AI implementation strategy.'}
                  <br />
                  <span className="font-semibold">- Vishal Negi, CTO at TechCorp</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}