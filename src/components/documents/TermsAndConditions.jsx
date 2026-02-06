import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const termsSections = [
    {
      title: '1. DEFINITIONS',
      content: `
        <ul class="space-y-2">
          <li><strong>"Freelancer":</strong> A User who submits Leads to Businesses through the Services in exchange for referral fees paid by Businesses.</li>
          <li><strong>"Business":</strong> A User who receives Leads, communicates with prospects, and pays referral fees to Freelancers when referred deals convert.</li>
          <li><strong>"Lead":</strong> Contact information or qualifying data relating to a prospective customer submitted through the platform.</li>
          <li><strong>"Credit":</strong> A virtual credit used by Freelancers to submit one Lead. Credits have no monetary value outside the platform and are non-transferable.</li>
          <li><strong>"Subscription":</strong> A recurring paid plan (e.g., Freelancer Pro Referrer, Business Basic/Standard/Premium) or a Credit pack purchase.</li>
          <li><strong>"Premium Exclusivity":</strong> The feature granting a Business exclusive access to a selected category within a radius of a chosen city, first-come-first-served and subject to Reflo Hub approval.</li>
          <li><strong>"Security Wallet":</strong> A Business-controlled wallet within the Services used for platform security, risk management, and (in limited cases) compensation to Freelancers as described in Section 7.</li>
          <li><strong>"Risk Score / Risk Tier":</strong> Reflo Hub's internal rating used to determine visibility controls, wallet thresholds, and enforcement actions.</li>
          <li><strong>"Fraud":</strong> Any intentional deception or manipulation including fake leads, harvested data, fake payment proof, lead theft, collusion, bypassing platform controls, or any conduct that Reflo Hub determines is fraudulent.</li>
        </ul>
      `,
    },
    {
      title: '2. ELIGIBILITY',
      content: `
        <p>You must be at least 18 years old and have legal capacity to enter into contracts. You represent that all account and payment information you provide is accurate, current, and complete. Reflo Hub may approve, deny, suspend, or terminate accounts at its sole discretion.</p>
      `,
    },
    {
      title: '3. ACCOUNT REGISTRATION & SECURITY',
      content: `
        <ol class="list-decimal pl-5 space-y-2">
          <li>You are responsible for safeguarding your login credentials and all activity under your account.</li>
          <li>Notify us immediately of any unauthorized use or breach.</li>
          <li>Unless expressly authorized by Reflo Hub, you may maintain only one Freelancer account and/or one Business account per legal entity.</li>
          <li>Reflo Hub may require identity verification, business verification, or additional documentation at any time.</li>
        </ol>
      `,
    },
    {
      title: 'Subscription Fees, Credit Packs & Payment Terms',
      content: `
        <div class="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 dark:border-orange-300 p-4 my-4 rounded-r">
          <p class="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚠️ Pricing Currency Note:</p>
          <p class="text-orange-700 dark:text-orange-300"><strong>INR pricing is only available for Indian users.</strong> <strong>USD pricing applies to all global users outside of India.</strong></p>
        </div>

        <h4 class="font-semibold text-lg mb-4 text-orange-400">4.1 Global Plans (USD Pricing)</h4>
        
        <!-- Global Freelancer Plans -->
        <div class="mb-8">
          <h5 class="font-semibold text-base mb-4 text-gray-800 dark:text-gray-200">Global Freelancer Plans</h5>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-orange-100 to-sky-100 dark:from-orange-900/30 dark:to-sky-900/30">
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Plan Type</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Description</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Price (USD)</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Billing</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Pro Referrer</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">No setup fee; 5 months FREE. After free period: $9.99/month with 3 lead submission credits per month</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">
                    <span class="text-green-600 dark:text-green-400 font-semibold">No setup fee; 5 months FREE</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 block">Then $9.99/month (was $19.98)</span>
                  </td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">One-time + Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Global Credit Packs -->
        <div class="mb-8">
          <h5 class="font-semibold text-base mb-4 text-gray-800 dark:text-gray-200">Global Credit Packs (One-time Purchase)</h5>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-sky-100 to-orange-100 dark:from-sky-900/30 dark:to-orange-900/30">
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Pack Name</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Credits</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Price (USD)</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Starter Pack</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">5 Credits</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">$5.00</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-400">$1.00 per credit</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Growth Pack</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">10 Credits</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">$10.00</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-400">$1.00 per credit</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Premium Pack</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">20 Credits</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">$15.00</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-400">$0.75 per credit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Global Business Plans -->
        <div class="mb-8">
          <h5 class="font-semibold text-base mb-4 text-gray-800 dark:text-gray-200">Global Business Plans</h5>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Plan</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">One-Time Setup</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">First Year</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">After First Year (Monthly)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Basic</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-semibold">$99 USD</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">12 months FREE</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">$29 USD/month</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Standard</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-semibold">$249 USD</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">12 months FREE</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">$49 USD/month</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Premium</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-semibold">$399 USD</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">12 months FREE</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">$149 USD/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4 class="font-semibold text-lg mb-4 mt-8 text-orange-400">4.2 Indian Plans (INR Pricing)</h4>
        
        <!-- Indian Freelancer Plans -->
        <div class="mb-8">
          <h5 class="font-semibold text-base mb-4 text-gray-800 dark:text-gray-200">Indian Freelancer Plans</h5>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-orange-100 to-sky-100 dark:from-orange-900/30 dark:to-sky-900/30">
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Plan Type</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Description</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Price (INR)</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Billing</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Pro Referrer</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">No setup fee; 5 months FREE. After free period: ₹699/month with 3 lead submission credits per month</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">
                    <span class="text-green-600 dark:text-green-400 font-semibold">No setup fee; 5 months FREE</span>
                    <span class="text-sm text-gray-500 dark:text-gray-400 block">Then ₹699/month (was ₹1,398)</span>
                  </td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">One-time + Monthly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Indian Credit Packs -->
        <div class="mb-8">
          <h5 class="font-semibold text-base mb-4 text-gray-800 dark:text-gray-200">Indian Credit Packs (One-time Purchase)</h5>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-sky-100 to-orange-100 dark:from-sky-900/30 dark:to-orange-900/30">
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Pack Name</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Credits</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Price (INR)</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Starter Pack</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">5 Credits</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">₹449</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-400">₹89.80 per credit</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Growth Pack</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">10 Credits</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">₹899</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-400">₹89.90 per credit</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Premium Pack</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">20 Credits</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">₹1,299</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-gray-600 dark:text-gray-400">₹64.95 per credit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Indian Business Plans -->
        <div class="mb-8">
          <h5 class="font-semibold text-base mb-4 text-gray-800 dark:text-gray-200">Indian Business Plans</h5>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <thead>
                <tr class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">Plan</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">One-Time Setup</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">First Year</th>
                  <th class="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-800 dark:text-gray-200">After First Year (Monthly)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Basic</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-semibold">₹2,999 INR</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">12 months FREE</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">₹999 INR/month</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Standard</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-semibold">₹3,999 INR</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">12 months FREE</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">₹1,999 INR/month</td>
                </tr>
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td class="border border-gray-300 dark:border-gray-600 p-3 font-medium">Premium</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-orange-600 dark:text-orange-400 font-semibold">₹9,999 INR</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3 text-green-600 dark:text-green-400 font-semibold">12 months FREE</td>
                  <td class="border border-gray-300 dark:border-gray-600 p-3">₹3,999 INR/month</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p class="mb-4"><strong>Tax Notice:</strong> All fees are exclusive of taxes unless stated otherwise. Applicable taxes (e.g., VAT, GST/HST, UAE VAT) may be charged based on your billing address.</p>

        <h4 class="font-semibold text-lg mb-4 text-orange-400">4.3 Billing & Renewals</h4>
        <p class="mb-4">Subscriptions renew automatically unless cancelled before renewal. You authorize Reflo Hub to charge your payment method on file. Failed payments may result in suspension or restricted access.</p>

        <h4 class="font-semibold text-lg mb-4 text-orange-400">4.4 Upgrades, Downgrades & Cancellations</h4>
        <p class="mb-4">Upgrades apply immediately with pro-rated charges; downgrades apply at the next billing cycle. Setup fees are non-refundable. Monthly fees are non-refundable once charged, except as required by law.</p>
      `,
    },
    {
      title: '5. LEAD SUBMISSION, QUALITY, AND PLATFORM CONTROLS',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">5.1 Lead Quality (Freelancer Obligations)</h4>
        <p class="mb-3">Freelancers must submit accurate, permission-based information. The following are prohibited:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Purchased/harvested databases</li>
          <li>Fake numbers, fake names, or fabricated leads</li>
          <li>Submitting minors' personal data without verifiable parental consent</li>
          <li>Repeated duplicate submissions</li>
        </ul>
        <p class="mb-4">Reflo Hub may use AI and/or manual review to validate leads. Leads failing quality standards may be rejected and the Credit refunded at Reflo Hub's discretion.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">5.2 Lead Visibility Controls (Business)</h4>
        <p class="mb-3">Reflo Hub may restrict or blur lead details (e.g., customer name/phone) for security, compliance, or risk reasons including:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>unpaid or unresolved prior lead obligations</li>
          <li>disputes</li>
          <li>insufficient Security Wallet balance after activation (Section 7)</li>
          <li>suspected fraud or policy violations</li>
        </ul>
        <p class="mb-4">Businesses may be required to (a) submit proof of payment for previous leads and/or (b) top up their Security Wallet to unlock full lead details.</p>
      `,
    },
    {
      title: '6. REFERRAL FEES & "100% COMMISSION" STRUCTURE',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.1 Direct Payment Model</h4>
        <p class="mb-4">Businesses pay referral fees directly to Freelancers. Reflo Hub does not deduct a percentage from Freelancer referral earnings under this model.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">6.2 Business Payment Deadline</h4>
        <p class="mb-3">By using Reflo Hub, the Business acknowledges and agrees to release the agreed referral commission to the Freelancer within fifteen (15) days after:</p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>successful closing of the referred deal, and</li>
          <li>receipt of payment from the client.</li>
        </ol>
        <p class="mb-4">Failure to pay within the stated timeframe may result in restricted access, suspension, or permanent ban.</p>
        <p class="mb-4">Reflo Hub may investigate disputes and take corrective actions to protect Users, including restricting access, applying penalties, or initiating legal remedies where appropriate.</p>
      `,
    },
    {
      title: '7. BUSINESS SECURITY WALLET (DYNAMIC RISK SYSTEM)',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.1 Purpose</h4>
        <p class="mb-4">The Security Wallet is a platform security tool used for risk management, dispute handling, and (in limited circumstances) partial compensation to Freelancers. It is not an insurance product and does not guarantee full recovery in all cases.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.2 Activation Rule (2 Leads + 1 Paid Conversion Trigger)</h4>
        <p class="mb-3">A Business is not required to maintain a Security Wallet balance until BOTH conditions are met:</p>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>the Business has received at least two (2) leads, and</li>
          <li>the Business has converted at least one (1) lead into a paid client.</li>
        </ol>
        <p class="mb-4">After this point, Reflo Hub may require the Business to maintain a minimum Security Wallet balance determined by its Risk Score.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.3 Dynamic Wallet Minimums</h4>
        <p class="mb-3">Reflo Hub may adjust the required Security Wallet balance based on:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>active lead volume</li>
          <li>conversion volume</li>
          <li>average referral fee exposure</li>
          <li>dispute history</li>
          <li>ratings and flags by counterparties</li>
          <li>fraud indicators and compliance risk</li>
        </ul>
        <p class="mb-3">Minimum baseline ranges (after activation):</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>India: typically ₹2,500 to ₹10,000 (risk-based)</li>
          <li>Global: typically $100 to $200 (risk-based)</li>
        </ul>
        <p class="mb-4">These ranges may be modified by Reflo Hub at any time to protect platform safety.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.4 Lead Release Rule (Blur/Unlock Mechanism)</h4>
        <p class="mb-3">If a Business does not meet wallet and/or payment-proof requirements, Reflo Hub may:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>blur new lead details, or</li>
          <li>restrict access to new leads, until the Business either:</li>
        </ul>
        <ol class="list-decimal pl-6 space-y-2 mb-4">
          <li>provides acceptable proof that previous freelancer payments are cleared, and/or</li>
          <li>tops up the Security Wallet to meet the required minimum.</li>
        </ol>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">7.5 Wallet Funding & Fees</h4>
        <p class="mb-4">Security Wallet top-ups may be processed via Stripe, PayPal, or other providers. Processing fees may apply and are non-refundable.</p>
      `,
    },
    {
      title: '8. RATINGS, FLAGS & RISK ANALYSIS',
      content: `
        <p class="mb-4">Reflo Hub maintains a bidirectional rating system to improve safety and lead quality:</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">8.1 Business Rates Freelancer</h4>
        <p class="mb-4">Businesses may rate lead quality (e.g., hot/warm/trash) and provide feedback. Excessive low-quality submissions may lead to Freelancer restrictions or bans.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">8.2 Freelancer Rates Business</h4>
        <p class="mb-4">Freelancers may rate Business behavior (e.g., good payer/slow payer/risky) and may flag issues such as delayed commission, poor conduct, or refusal to cooperate.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">8.3 Use of Ratings</h4>
        <p class="mb-3">Ratings and flags may affect:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Risk Score / wallet thresholds</li>
          <li>lead access and visibility</li>
          <li>search ranking</li>
          <li>verification badges</li>
          <li>enforcement actions</li>
        </ul>
        <p class="mb-4">Reflo Hub may remove abusive, false, or retaliatory ratings at its sole discretion.</p>
      `,
    },
    {
      title: '9. DISPUTES & INVESTIGATIONS',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">9.1 Dispute Centre</h4>
        <p class="mb-4">Users must attempt dispute resolution through Reflo Hub's in-app Dispute Centre when applicable. Reflo Hub may request documentation, proof of payment, messages, call logs, invoices, or other evidence.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">9.2 Dispute Team Authority</h4>
        <p class="mb-3">Reflo Hub's dispute team may investigate and issue binding decisions. Reflo Hub may impose consequences including:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>restricted access to leads</li>
          <li>wallet enforcement</li>
          <li>payout of available wallet funds</li>
          <li>suspension or permanent ban</li>
        </ul>
        <p class="mb-4">Reflo Hub's decisions are final to the maximum extent permitted by law.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">9.3 Evidence & Response Time</h4>
        <p class="mb-4">Reflo Hub may require responses within a specified time window (including 48 hours). Failure to respond may be treated as non-cooperation and may weigh against the non-responding party.</p>
      `,
    },
    {
      title: '10. FRAUD, PENALTIES & ZERO-TOLERANCE BANS',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">10.1 Zero Tolerance</h4>
        <p class="mb-4">If Reflo Hub determines that a Business or Freelancer has committed fraud, the account may be permanently banned on the first confirmed incident.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">10.2 Wallet Compensation and Penalties</h4>
        <p class="mb-3">If a Business is found guilty and Security Wallet funds exist:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Reflo Hub may compensate affected freelancers from available wallet funds (attempting best-effort recovery).</li>
          <li>If the wallet balance exceeds the amount required to compensate affected freelancers, Reflo Hub may retain the remaining funds as a penalty.</li>
        </ul>
        <p class="mb-3"><strong>Example:</strong></p>
        <p class="mb-3">If Freelancer is owed $200 and wallet contains $500:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>$200 may be paid to Freelancer</li>
          <li>$300 may be retained as penalty</li>
        </ul>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">10.3 Multiple Affected Freelancers (Equal Split Rule)</h4>
        <p class="mb-4">If multiple freelancers are affected and the wallet balance is insufficient to cover all amounts owed, Reflo Hub may distribute available wallet funds in equal portions among affected freelancers, unless Reflo Hub decides another fair distribution method based on evidence.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">10.4 Mutual Fault</h4>
        <p class="mb-4">If Reflo Hub determines that both parties are guilty of fraud or misconduct in relation to the same event, Reflo Hub may ban both accounts and may decline any recovery or payout.</p>
      `,
    },
    {
      title: '11. USER OBLIGATIONS & PROHIBITED CONDUCT',
      content: `
        <p class="mb-3">You agree not to:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>violate applicable laws (privacy/anti-spam included)</li>
          <li>upload malware or run phishing attempts</li>
          <li>reverse engineer the Services</li>
          <li>use bots/automation to overload the platform</li>
          <li>manipulate referrals, ratings, disputes, or wallet rules</li>
          <li>submit fake leads, fake proof, or harvested data</li>
          <li>harass other users</li>
        </ul>
      `,
    },
    {
      title: '12. INTELLECTUAL PROPERTY',
      content: `
        <p>The Services, content, branding, and software are owned by Reflo Hub or its licensors and protected by UAE and international IP laws. You receive a limited, revocable license to use the Services in accordance with these Terms.</p>
      `,
    },
    {
      title: '13. USER CONTENT LICENSE',
      content: `
        <p>You retain ownership of content you submit ("User Content"). You grant Reflo Hub a worldwide, royalty-free, sublicensable license to use it solely to operate, improve, and enforce the Services.</p>
      `,
    },
    {
      title: '14. PRIVACY & DATA PROTECTION',
      content: `
        <p>Reflo Hub processes personal data under its Privacy Policy, GDPR Compliance Statement, CCPA Notice, PIPEDA Statement, and Cookie Policy. By using the Services, you consent to processing as described therein.</p>
      `,
    },
    {
      title: '15. WARRANTIES & DISCLAIMERS',
      content: `
        <p>The Services are provided "as is" and "as available." Reflo Hub disclaims warranties to the maximum extent permitted by law. Reflo Hub does not guarantee lead conversion, continuous availability, or error-free operation.</p>
      `,
    },
    {
      title: '16. LIMITATION OF LIABILITY',
      content: `
        <p class="mb-3">To the fullest extent permitted by law, Reflo Hub shall not be liable for indirect or consequential damages. Reflo Hub's total liability shall not exceed the greater of:</p>
        <p class="mb-3">(a) USD 100, or</p>
        <p class="mb-4">(b) total Subscription fees paid by you in the 12 months preceding the claim.</p>
      `,
    },
    {
      title: '17. INDEMNIFICATION',
      content: `
        <p>You agree to indemnify and hold harmless Reflo Hub from claims arising from your misuse of Services, violation of Terms, or infringement of third-party rights.</p>
      `,
    },
    {
      title: '18. SUSPENSION & TERMINATION',
      content: `
        <p class="mb-3">Reflo Hub may suspend or terminate your account for:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>violation of these Terms</li>
          <li>non-payment of fees</li>
          <li>fraud or harmful conduct</li>
          <li>risk to platform integrity</li>
        </ul>
        <p>Upon termination, all licenses cease and Reflo Hub may delete or retain records as required for compliance and enforcement.</p>
      `,
    },
    {
      title: '19. GOVERNING LAW & DISPUTE RESOLUTION',
      content: `
        <h4 class="font-semibold text-lg mb-3 text-orange-400">19.1 Governing Law</h4>
        <p class="mb-4">These Terms are governed by the laws of the Dubai International Financial Centre (DIFC).</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">19.2 Arbitration</h4>
        <p class="mb-4">Disputes shall be finally resolved by arbitration under the DIFC-LCIA Arbitration Rules, seated in the DIFC, Dubai, with one arbitrator and English as the language.</p>
        
        <h4 class="font-semibold text-lg mb-3 text-orange-400">19.3 Injunctive Relief</h4>
        <p class="mb-4">Either party may seek urgent injunctive relief in any competent court to protect IP or confidential information.</p>
      `,
    },
    {
      title: '20. CHANGES TO THESE TERMS',
      content: `
        <p>Reflo Hub may update these Terms. Material changes will be notified via email or in-app notice at least 14 days before they take effect. Continued use after the effective date constitutes acceptance.</p>
      `,
    },
    {
      title: '21. OTHER LEGAL TERMS',
      content: `
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Entire Agreement:</strong> These Terms supersede prior agreements.</li>
          <li><strong>Severability:</strong> Unenforceable provisions do not affect the rest.</li>
          <li><strong>Assignment:</strong> You may not assign without consent; Reflo Hub may assign freely.</li>
          <li><strong>Force Majeure:</strong> No liability for events beyond reasonable control.</li>
          <li><strong>No Waiver:</strong> Failure to enforce once is not a waiver.</li>
        </ul>
      `,
    },
    {
      title: '22. CONTACT',
      content: `
        <p class="mb-3">Legal Department</p>
        <p>Reflo Hub FZ LLC</p>
        <p>IFZA Business Park, (DDP), PO Box 342001, Dubai, United Arab Emirates</p>
        <p class="mb-3"><strong>Email:</strong> <a href="mailto:support@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a> | <a href="mailto:privacy@reflohub.com" class="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
        <p><strong>Tel:</strong> 1-855-220-0505</p>
      `,
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Terms & Conditions</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Welcome to Reflo Hub. By using our platform, you agree to these terms and conditions governing our SaaS-based referral network.
          </p>
        </motion.div>

        {/* Company Details Header */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Effective Date:</strong> January 21, 2026</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Company:</strong> Reflo Hub FZ LLC</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Address:</strong> IFZA Business Park, (DDP), PO Box 342001, Dubai, United Arab Emirates</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a> | <strong>Support:</strong> <a href="mailto:support@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">support@reflohub.com</a></p>
            <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Tel:</strong> 1-855-220-0505</p>
            <p className="text-gray-600 dark:text-gray-300">Reflo Hub is incorporated as a private limited company under the Dubai Integrated Economic Zones Implementing Regulations 2023. We do not maintain an establishment or appointed representative in the EU/EEA, Canada, or the United States.</p>
            <p className="text-gray-600 dark:text-gray-300 mt-4">These Terms & Conditions ("Terms") govern your access to and use of Reflo Hub's website, applications, and related services (collectively, the "Services"). By creating an account or using the Services, you agree to be bound by these Terms.</p>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-orange-300/10 transition-all duration-300"
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 py-4 text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact our support team for any inquiries about our terms and conditions.
          </p>
          <motion.a
            href="mailto:support@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Global SaaS Lead Referral Platform Terms & Conditions" />
          <meta
            name="description"
            content="Go over the terms and conditions for using Reflo Hub, the SaaS platform that connects businesses and freelancers worldwide with no commission."
          />
          <meta
            name="keywords"
            content="freelancer terms and conditions, SaaS referral terms, platform usage agreement, global lead generation SaaS, zero-commission platform, Reflo Hub terms"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TermsAndConditions;