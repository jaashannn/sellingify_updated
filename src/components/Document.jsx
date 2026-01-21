import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Document = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: 'PIPEDA Compliance Statement',
      content: `
        <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Last updated: January 21, 2026</strong></p>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub FZ LLC ("Reflo Hub", "we", "our" or "us") is committed to safeguarding the privacy of individuals whose personal information we process in the course of commercial activities involving Canada. Although Reflo Hub is headquartered outside Canada, we voluntarily adhere to the Personal Information Protection and Electronic Documents Act (S.C. 2000, c. 5) ("PIPEDA") as a standard for responsible data governance.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4"><strong>Head Office (Global):</strong><br />
        IFZA Business Park, (DDP)<br />
        PO Box 342001, Dubai, United Arab Emirates<br />
        <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
        <strong>Tel:</strong> 1-855-220-0505</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Reflo Hub does not maintain a physical presence or appointed representative in Canada. All privacy inquiries and requests should therefore be directed to us at the contact details above.</p>
        <h4 className="font-semibold mt-6">Scope of This Statement</h4>
        <p className="text-gray-600 dark:text-gray-300">This statement applies to personal information about identifiable individuals in Canada that we collect, use, or disclose in connection with our SaaS referral marketplace, risk management systems, security wallet infrastructure, and dispute resolution processes.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">"Personal information" means information about an identifiable individual, excluding business contact information used solely for professional communication.</p>
        <h4 className="font-semibold mt-6">The Ten Fair Information Principles Under PIPEDA</h4>
        <ol className="list-decimal pl-5 space-y-4">
          <li><strong>Accountability</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">We have appointed an internal Privacy Officer responsible for Reflo Hub's compliance with PIPEDA. The Privacy Officer may delegate operational tasks but retains ultimate accountability for privacy governance.</p></li>
          <li><strong>Identifying Purposes</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">We identify and document the purposes for which personal information is collected before or at the time of collection. These purposes include:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Registering and verifying user accounts (Freelancers and Businesses)</li>
            <li>Operating the Reflo Hub lead marketplace</li>
            <li>Facilitating lead submission, validation, and matching</li>
            <li>Running AI-based risk scoring, ratings, and behavioral analysis</li>
            <li>Managing the Business Security Wallet system</li>
            <li>Enforcing blurred/restricted lead visibility rules</li>
            <li>Handling disputes, investigations, and fraud detection</li>
            <li>Preventing abuse, collusion, and platform circumvention</li>
            <li>Providing customer support and service improvements</li>
            <li>Sending transactional, security, and compliance communications</li>
            <li>Complying with legal, tax, and regulatory obligations</li>
          </ul></li>
          <li><strong>Consent</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">Reflo Hub obtains meaningful consent for the collection, use, or disclosure of personal information, except where inappropriate (e.g., fraud prevention, legal obligations, or security risks).</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Consent may be:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Express (e.g., registration checkbox, KYC consent, cookie preferences), or</li>
            <li>Implied (e.g., continued use of the platform in permitted jurisdictions).</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Individuals may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice.</p></li>
          <li><strong>Limiting Collection</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">We collect only the personal information necessary to operate:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>the referral marketplace</li>
            <li>the security wallet system</li>
            <li>risk scoring and ratings</li>
            <li>lead quality validation</li>
            <li>dispute resolution</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-2">We do not collect personal data indiscriminately or beyond operational necessity.</p></li>
          <li><strong>Limiting Use, Disclosure, and Retention</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">Personal information is used and disclosed only for the purposes for which it was collected, unless:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>the individual provides additional consent, or</li>
            <li>disclosure is required by law, court order, or regulatory authority.</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-2">We retain personal information only as long as necessary to:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>fulfill business purposes</li>
            <li>resolve disputes</li>
            <li>enforce terms of service</li>
            <li>meet legal obligations</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-2">After that period, data is securely deleted, erased, or anonymized.</p></li>
          <li><strong>Accuracy</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">We take reasonable steps to ensure personal information is accurate, complete, and up-to-date for its intended use.</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Users may review and update their information through their dashboard or by contacting <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>.</p></li>
          <li><strong>Safeguards</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">Reflo Hub employs administrative, technical, and physical safeguards appropriate to the sensitivity of the information, including:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>TLS 1.3 encryption in transit</li>
            <li>AES-256 encryption at rest</li>
            <li>Role-based access control and multi-factor authentication</li>
            <li>Continuous vulnerability scanning</li>
            <li>Annual penetration testing</li>
            <li>SOC 2–aligned security controls</li>
            <li>ISO 27001-inspired internal policies</li>
            <li>Secure handling of KYC and dispute evidence</li>
            <li>Restricted access to lead data based on risk state</li>
          </ul></li>
          <li><strong>Openness</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">We make our privacy practices publicly available through:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>This PIPEDA statement</li>
            <li>Our Privacy Policy</li>
            <li>Our Cookie Policy</li>
            <li>Our Terms & Conditions</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-2">All are accessible at <a href="http://www.reflohub.com/privacy" className="text-orange-400 dark:text-orange-300 hover:underline">www.reflohub.com/privacy</a>.</p></li>
          <li><strong>Individual Access</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">Upon written request and identity verification, we will inform individuals of:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>the existence of their personal data</li>
            <li>how it is used</li>
            <li>to whom it has been disclosed</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300 mt-2">We will provide access within 30 days where feasible. Individuals may request corrections, and we will amend information where appropriate.</p></li>
          <li><strong>Challenging Compliance</strong><br />
          <p className="text-gray-600 dark:text-gray-300 mt-1">Individuals may submit privacy concerns to:</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Privacy Officer – Reflo Hub<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">We investigate all complaints and respond in writing. If a complaint is justified, we will take corrective action.</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Unresolved complaints may be escalated to the Office of the Privacy Commissioner of Canada (OPC).</p></li>
        </ol>
        <h4 className="font-semibold mt-6">Cross-Border Data Transfers</h4>
        <p className="text-gray-600 dark:text-gray-300">Personal information may be processed outside Canada, including in:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>United Arab Emirates</li>
          <li>European Union</li>
          <li>United States</li>
          <li>Other jurisdictions where our processors operate</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">While in another jurisdiction, information may be accessed by local authorities under applicable laws. We use contractual safeguards and industry-standard security to protect data during transfers.</p>
        <h4 className="font-semibold mt-6">Data Retention Schedule (Canada-Relevant)</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Data Category</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Retention Period</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Disposal Method</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years after account closure</td><td className="border border-gray-300 dark:border-gray-600 p-2">Secure deletion / crypto erasure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead & Referral Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years post closure</td><td className="border border-gray-300 dark:border-gray-600 p-2">De-identification or deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Support Tickets</td><td className="border border-gray-300 dark:border-gray-600 p-2">2 years after resolution</td><td className="border border-gray-300 dark:border-gray-600 p-2">Secure deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">KYC Documents</td><td className="border border-gray-300 dark:border-gray-600 p-2">30 days post verification</td><td className="border border-gray-300 dark:border-gray-600 p-2">Irreversible erasure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Audit Logs</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 months</td><td className="border border-gray-300 dark:border-gray-600 p-2">Log rotation & deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Risk Scores & Ratings</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years</td><td className="border border-gray-300 dark:border-gray-600 p-2">Anonymization or deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Security Wallet Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years</td><td className="border border-gray-300 dark:border-gray-600 p-2">Secure archival then deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Dispute Files</td><td className="border border-gray-300 dark:border-gray-600 p-2">3–5 years</td><td className="border border-gray-300 dark:border-gray-600 p-2">Secure archival then deletion</td></tr>
          </tbody>
        </table>
        <h4 className="font-semibold mt-6">Automated Decision-Making</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub uses AI for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>risk scoring</li>
          <li>wallet threshold recommendations</li>
          <li>lead visibility restrictions</li>
          <li>fraud detection</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">However, Reflo Hub does not make legally binding decisions solely through automation. Final decisions on disputes, bans, or payouts involve human review by our compliance or dispute team.</p>
        <h4 className="font-semibold mt-6">Responding to Data Breaches</h4>
        <p className="text-gray-600 dark:text-gray-300">If a breach involving personal information poses a real risk of significant harm, we will:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>notify affected individuals as soon as feasible</li>
          <li>notify the Office of the Privacy Commissioner of Canada (OPC)</li>
          <li>describe the nature of the breach, data involved, and remediation steps</li>
        </ul>
        <h4 className="font-semibold mt-6">Updates to This Statement</h4>
        <p className="text-gray-600 dark:text-gray-300">We may amend this PIPEDA Compliance Statement from time to time. Material changes will be communicated via email or in-app notification. The "Last updated" date reflects the latest revision.</p>
        <h4 className="font-semibold mt-6">Contact – Privacy Officer</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Privacy Officer<br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
          <strong>Tel:</strong> 1-855-220-0505
        </p>
      `,
    },
    {
      title: 'CCPA & CPRA Notice',
      content: `
        <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Last updated: January 21, 2026</strong></p>
        <p className="text-gray-600 dark:text-gray-300">This California Consumer Privacy Act and California Privacy Rights Act Notice (the "CCPA Notice") supplements the Reflo Hub Privacy Policy and applies solely to California residents ("Consumers" or "you"). It describes how Reflo Hub FZ LLC ("Reflo Hub," "we," "our," or "us") collects, uses, discloses, and retains Personal Information ("PI") subject to the CCPA as amended by the CPRA (Cal. Civ. Code § 1798.100 et seq.).</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4"><strong>Headquarters:</strong><br />
        Reflo Hub FZ LLC<br />
        IFZA Business Park, (DDP)<br />
        PO Box 342001, Dubai, United Arab Emirates<br />
        <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Although our principal place of business is outside the United States, we may process PI of California residents who use our platform. We do not maintain a physical presence in California and have no appointed CCPA representative; all requests should be directed to the address or email above.</p>
        <h4 className="font-semibold mt-6">1. Definitions</h4>
        <p className="text-gray-600 dark:text-gray-300"><strong>Personal Information (PI):</strong><br />
        Information that identifies, relates to, describes, or could reasonably be linked with a particular California consumer or household.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2"><strong>Sensitive Personal Information (SPI):</strong><br />
        PI granted heightened protection under CPRA (e.g., government IDs, biometric data used for verification, precise geolocation).</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2"><strong>Sale:</strong><br />
        Transferring PI to a third party for monetary or other valuable consideration.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2"><strong>Sharing:</strong><br />
        Disclosing PI to a third party for cross-context behavioral advertising.</p>
        <h4 className="font-semibold mt-6">2. Notice at Collection</h4>
        <p className="text-gray-600 dark:text-gray-300">The table below identifies the categories of PI we may collect, examples, sources, business/commercial purposes, whether we "sell" or "share" the PI, and retention periods.</p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">CCPA Category</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Examples</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Sources</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Business / Commercial Purpose</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Sold?</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Shared?</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">A. Identifiers</td><td className="border border-gray-300 dark:border-gray-600 p-2">Name, alias, unique user ID, email, IP address</td><td className="border border-gray-300 dark:border-gray-600 p-2">You; automatic collection</td><td className="border border-gray-300 dark:border-gray-600 p-2">Account creation, authentication, security, fraud detection</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years post-closure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">B. Customer Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">Billing address, invoices, wallet top-ups</td><td className="border border-gray-300 dark:border-gray-600 p-2">You; payment processor</td><td className="border border-gray-300 dark:border-gray-600 p-2">Subscription billing, wallet operations, audits</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">C. Protected Class Attributes</td><td className="border border-gray-300 dark:border-gray-600 p-2">None intentionally collected</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">D. Commercial Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">Subscription history, credit purchases, wallet transactions</td><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processor; platform logs</td><td className="border border-gray-300 dark:border-gray-600 p-2">Service delivery, analytics, dispute handling</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">E. Biometric Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">Live selfie for KYC</td><td className="border border-gray-300 dark:border-gray-600 p-2">You</td><td className="border border-gray-300 dark:border-gray-600 p-2">Identity verification, fraud prevention</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">Deleted after match or within 30 days</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">F. Internet/Network Activity</td><td className="border border-gray-300 dark:border-gray-600 p-2">Device type, referrer URL, session logs</td><td className="border border-gray-300 dark:border-gray-600 p-2">Automatic</td><td className="border border-gray-300 dark:border-gray-600 p-2">Security monitoring, analytics, debugging</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 months</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">G. Geolocation (coarse)</td><td className="border border-gray-300 dark:border-gray-600 p-2">Country/region from IP</td><td className="border border-gray-300 dark:border-gray-600 p-2">Automatic</td><td className="border border-gray-300 dark:border-gray-600 p-2">Localization, risk assessment</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 months</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">H. Audio/Visual</td><td className="border border-gray-300 dark:border-gray-600 p-2">Support call recordings, uploaded screenshots</td><td className="border border-gray-300 dark:border-gray-600 p-2">You</td><td className="border border-gray-300 dark:border-gray-600 p-2">Customer support, dispute evidence</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">2 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">I. Professional/Employment Info</td><td className="border border-gray-300 dark:border-gray-600 p-2">Business category, role, industry</td><td className="border border-gray-300 dark:border-gray-600 p-2">You</td><td className="border border-gray-300 dark:border-gray-600 p-2">Matching engine, lead routing, risk scoring</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">J. Education Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">None collected</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">K. Inferences</td><td className="border border-gray-300 dark:border-gray-600 p-2">Risk score, quality score, rating profile</td><td className="border border-gray-300 dark:border-gray-600 p-2">Internal analytics</td><td className="border border-gray-300 dark:border-gray-600 p-2">Wallet calibration, lead visibility controls, fraud prevention</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">L. Sensitive PI</td><td className="border border-gray-300 dark:border-gray-600 p-2">Government ID; selfie</td><td className="border border-gray-300 dark:border-gray-600 p-2">You</td><td className="border border-gray-300 dark:border-gray-600 p-2">KYC/AML compliance; fraud prevention</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">Deleted after verification or 30 days</td></tr>
          </tbody>
        </table>
        <h4 className="font-semibold mt-4">Purposes of Processing (What we do with your data)</h4>
        <p className="text-gray-600 dark:text-gray-300">We use PI for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Service Provision & Marketplace Operations (lead submission, matching, ratings, disputes)</li>
          <li>Security Wallet System (dynamic thresholds, risk analysis, restricted/blurred leads)</li>
          <li>Fraud Detection & Integrity Controls (abuse, collusion, circumvention prevention)</li>
          <li>Debugging & Error Repair</li>
          <li>Analytics & Product Improvement</li>
          <li>Transactional Communications (receipts, alerts, dispute notices)</li>
          <li>Legal & Regulatory Compliance</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We do not use PI for cross-context behavioral advertising.</p>
        <h4 className="font-semibold mt-6">3. Sale or Sharing of Personal Information</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub does not sell PI for monetary consideration.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Reflo Hub does not share PI for cross-context behavioral advertising.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">If this ever changes, we will update this Notice and provide a clear "Do Not Sell or Share My Personal Information" option before any such activity begins.</p>
        <h4 className="font-semibold mt-6">4. Disclosure of Personal Information</h4>
        <p className="text-gray-600 dark:text-gray-300">We may disclose PI to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Service Providers (cloud hosting, payment processors, analytics, email systems)</li>
          <li>Dispute Resolution Team (for investigations, evidence review, and enforcement)</li>
          <li>Law Enforcement or Courts (when legally required)</li>
          <li>Fraud & Security Partners (for threat detection)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">In disputes, we may share relevant records (timestamps, messages, logs, or evidence) only as necessary to resolve the case.</p>
        <h4 className="font-semibold mt-6">5. Your CCPA Rights</h4>
        <p className="text-gray-600 dark:text-gray-300">California residents have the following rights (subject to verification and legal limits):</p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Right</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Know</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request categories and specific pieces of PI collected in the past 12 months.</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Delete</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request deletion of PI, subject to legal/security exceptions.</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Correct</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request correction of inaccurate PI.</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Opt-Out of Sale/Sharing</td><td className="border border-gray-300 dark:border-gray-600 p-2">Not applicable today (we do not sell/share).</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Limit Use of SPI</td><td className="border border-gray-300 dark:border-gray-600 p-2">Limit use of Sensitive PI to necessary purposes. We already restrict SPI to KYC/security only.</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Non-Discrimination</td><td className="border border-gray-300 dark:border-gray-600 p-2">You will not be penalized for exercising your rights.</td></tr>
          </tbody>
        </table>
        <h4 className="font-semibold mt-6">6. How to Exercise Your Rights</h4>
        <p className="text-gray-600 dark:text-gray-300">You or an authorized agent may submit a verifiable request via:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Web Form:</strong> <a href="http://reflohub.com/privacy-request" className="text-orange-400 dark:text-orange-300 hover:underline">reflohub.com/privacy-request</a></li>
          <li><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></li>
          <li><strong>Toll-Free:</strong> 1-855-220-0505 (Mon–Fri, 9 AM–5 PM PT)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We will:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Confirm receipt within 10 business days</li>
          <li>Respond within 45 calendar days (with one possible 45-day extension if needed)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We will verify your identity via email confirmation and/or two-factor authentication. Authorized agents must provide written permission.</p>
        <h4 className="font-semibold mt-6">7. Sensitive Personal Information Usage Policy</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub uses Sensitive PI only for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Identity verification (passport/ID + selfie)</li>
          <li>Fraud prevention and platform security</li>
          <li>Legal and regulatory compliance (KYC/AML)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We do not use SPI to infer personal characteristics.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">If you limit SPI use, some services (e.g., payouts or lead access) may be restricted.</p>
        <h4 className="font-semibold mt-6">8. Data Retention</h4>
        <p className="text-gray-600 dark:text-gray-300">We retain PI only as long as reasonably necessary for the purposes described in this Notice or as required by law. See retention table in Section 2.</p>
        <h4 className="font-semibold mt-6">9. Children's Privacy</h4>
        <p className="text-gray-600 dark:text-gray-300">Our services are not directed to children under 16.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We do not knowingly collect PI from minors. If discovered, we will delete it promptly.</p>
        <h4 className="font-semibold mt-6">10. Updates to This CCPA Notice</h4>
        <p className="text-gray-600 dark:text-gray-300">We may update this Notice to reflect changes in law or our practices. Material changes will be posted on our website and/or emailed to users. The "Last updated" date reflects the latest version.</p>
        <h4 className="font-semibold mt-6">11. Contact Us</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Privacy Team – CCPA Inquiries<br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
          <strong>Tel:</strong> 1-855-220-0505
        </p>
      `,
    },
    {
      title: 'GDPR Compliance Statement',
      content: `
        <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Last updated: January 21, 2026</strong></p>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub FZ LLC ("Reflo Hub", "we", "our" or "us") is committed to protecting the privacy and security of personal data entrusted to us. Although our headquarters are located outside the European Economic Area (EEA), we process personal data relating to users in the EEA and therefore comply with Regulation (EU) 2016/679 (the "GDPR").</p>
        <h4 className="font-semibold mt-6">1. Controller Details</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Reflo Hub FZ LLC<br />
          IFZA Business Park, (DDP)<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Reflo Hub is incorporated as a private limited company under the Dubai Integrated Economic Zones Implementing Regulations 2023. We do not maintain an establishment within the EU/EEA and, pursuant to Art. 27 GDPR, we have elected not to appoint an EU representative. All GDPR-related inquiries should therefore be directed to us at the contact details above.</p>
        <h4 className="font-semibold mt-6">2. Key Definitions</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
          <li><strong>Processing:</strong> Any operation performed on personal data (collection, storage, use, disclosure, etc.).</li>
          <li><strong>Data Subject:</strong> The individual to whom the personal data relates.</li>
          <li><strong>Controller:</strong> The entity that determines the purposes and means of processing personal data.</li>
        </ul>
        <h4 className="font-semibold mt-6">3. Categories of Personal Data We Collect</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Data Category</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Examples</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Name, email, phone, password hash, role (freelancer/business)</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by user</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Profile & Business Info</td><td className="border border-gray-300 dark:border-gray-600 p-2">Industry, city, website, payout details, tax IDs</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by user</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead & Referral Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Prospect contact details, service needs, lead notes</td><td className="border border-gray-300 dark:border-gray-600 p-2">Submitted by freelancers</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Transaction Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Subscriptions, invoices, wallet top-ups, audit trails</td><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processor & platform logs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Usage Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">IP address, device/browser, pages visited, timestamps</td><td className="border border-gray-300 dark:border-gray-600 p-2">Automatically collected</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Ratings & Risk Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Lead quality ratings, payment behavior flags, risk scores</td><td className="border border-gray-300 dark:border-gray-600 p-2">Generated by platform</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Security Wallet Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Wallet balance, thresholds, adjustments, evidence</td><td className="border border-gray-300 dark:border-gray-600 p-2">Business activity & AI analysis</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Dispute Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">Chat logs, screenshots, proof of payment, timestamps</td><td className="border border-gray-300 dark:border-gray-600 p-2">Users & platform logs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Marketing Preferences</td><td className="border border-gray-300 dark:border-gray-600 p-2">Email opt-ins, notification settings</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by user</td></tr>
          </tbody>
        </table>
        <p className="text-gray-600 dark:text-gray-300 mt-4">We do not intentionally collect special category data (Art. 9 GDPR) or data of children under 16.</p>
        <h4 className="font-semibold mt-6">4. Lawful Bases for Processing (Art. 6 GDPR)</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Purpose</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Lawful Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account creation & platform operation</td><td className="border border-gray-300 dark:border-gray-600 p-2">Contract (Art. 6(1)(b))</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead submission, matching & dashboards</td><td className="border border-gray-300 dark:border-gray-600 p-2">Contract</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Security Wallet management</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests (Art. 6(1)(f))</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Risk scoring, ratings & fraud detection</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests + Legal Obligation</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Blurred/restricted lead visibility</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests (platform integrity)</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Dispute handling & investigations</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests + Legal Obligation</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processing & billing</td><td className="border border-gray-300 dark:border-gray-600 p-2">Contract</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Marketing communications</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consent (Art. 6(1)(a))</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Analytics & product improvement</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests (pseudonymized)</td></tr>
          </tbody>
        </table>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Where we rely on legitimate interests, we have conducted balancing assessments to ensure our interests do not override data subject rights.</p>
        <h4 className="font-semibold mt-6">5. How We Use Personal Data</h4>
        <p className="text-gray-600 dark:text-gray-300">We process personal data for the following purposes:</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2"><strong>Service Delivery</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Register accounts and verify identities</li>
          <li>Enable lead submission, matching, and communication</li>
          <li>Display dashboards and analytics</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-3"><strong>Security Wallet System</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Dynamically calculate wallet thresholds</li>
          <li>Restrict or release blurred leads</li>
          <li>Prevent payment default risks to freelancers</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-3"><strong>Risk & Fraud Controls</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Analyze business conversion behavior</li>
          <li>Monitor freelancer lead quality</li>
          <li>Detect collusion, circumvention, or abuse</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-3"><strong>Dispute Resolution</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Review evidence (chats, invoices, logs)</li>
          <li>Conduct investigations</li>
          <li>Apply enforcement actions where necessary</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-3"><strong>Customer Support</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Respond to inquiries</li>
          <li>Resolve complaints and technical issues</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-3"><strong>Analytics & Optimization</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Improve platform performance</li>
          <li>Enhance AI risk models</li>
          <li>Conduct A/B testing</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-3"><strong>Marketing (with consent)</strong></p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Send newsletters, updates, or promotions</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-4">We do not sell personal data and we do not engage in automated decision-making that produces legal or similarly significant effects without human oversight.</p>
        <h4 className="font-semibold mt-6">6. International Data Transfers (Chapter V GDPR)</h4>
        <p className="text-gray-600 dark:text-gray-300">Personal data may be stored or processed in:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>United Arab Emirates</li>
          <li>European Union (for redundancy)</li>
          <li>United States (for certain service providers)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Where data is transferred outside the EEA, we use:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>Standard Contractual Clauses (SCCs)</li>
          <li>Encryption in transit and at rest</li>
          <li>Binding data processing agreements with sub-processors</li>
        </ul>
        <h4 className="font-semibold mt-6">7. Data Retention (Art. 5(1)(e))</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Data Type</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account & Transaction Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years after account closure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead & Referral Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years after closure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Marketing Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Until opt-out or 2 years after last interaction</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Log & Security Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 months (longer if under investigation)</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Risk Scores & Ratings</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Security Wallet Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Dispute Files</td><td className="border border-gray-300 dark:border-gray-600 p-2">3–5 years</td></tr>
          </tbody>
        </table>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Data may be retained longer where necessary for legal claims or regulatory investigations.</p>
        <h4 className="font-semibold mt-6">8. Data Security (Art. 32)</h4>
        <p className="text-gray-600 dark:text-gray-300">We implement strong safeguards including:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>TLS 1.3 encryption in transit</li>
          <li>AES-256 encryption at rest</li>
          <li>Role-based access control + MFA</li>
          <li>Continuous vulnerability scanning</li>
          <li>Annual penetration testing</li>
          <li>ISO 27001-aligned policies</li>
          <li>Daily encrypted backups with 30-day recovery</li>
        </ul>
        <h4 className="font-semibold mt-6">9. Data Subject Rights (Arts. 12–22)</h4>
        <p className="text-gray-600 dark:text-gray-300">EEA users have the right to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Access their personal data</li>
          <li>Rectify inaccurate data</li>
          <li>Erase data ("right to be forgotten")</li>
          <li>Restrict processing in certain cases</li>
          <li>Data portability</li>
          <li>Object to legitimate interest processing</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <h4 className="font-semibold mt-6">10. Exercising Your Rights</h4>
        <p className="text-gray-600 dark:text-gray-300">To submit a GDPR request, email: <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a> with subject line: "GDPR Request."</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">We will respond within 30 days. We may require identity verification before processing your request.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">If you believe we have not complied with GDPR, you may lodge a complaint with your local supervisory authority. We welcome the opportunity to resolve concerns first.</p>
        <h4 className="font-semibold mt-6">11. Cookies & Tracking</h4>
        <p className="text-gray-600 dark:text-gray-300">We use cookies, pixels, and SDKs to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Maintain secure sessions</li>
          <li>Remember preferences</li>
          <li>Measure analytics</li>
          <li>Support marketing (with consent)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-2">See our Cookie Policy for full details.</p>
        <h4 className="font-semibold mt-6">12. Children's Privacy</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub is not directed to children under 16.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-2">If we discover data from a minor, we will delete it promptly.</p>
        <h4 className="font-semibold mt-6">13. Changes to This Statement</h4>
        <p className="text-gray-600 dark:text-gray-300">We may update this GDPR Compliance Statement periodically. Material changes will be communicated via email or in-app notice. The "Last updated" date reflects the latest revision.</p>
        <h4 className="font-semibold mt-6">14. Contact Us</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Data Protection Lead<br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
          <strong>Tel:</strong> 1-855-220-0505
        </p>
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
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Privacy Compliance</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Privacy & Data Protection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub is committed to protecting your privacy and ensuring compliance with global data protection regulations, including PIPEDA, CCPA/CPRA, and GDPR.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-07</p>
          {sections.map((section, index) => (
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
            Contact our Privacy Team for inquiries about our data protection practices or compliance statements.
          </p>
          <motion.a
            href="mailto:privacy@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Privacy Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Privacy Compliance Statements" />
          <meta
            name="description"
            content="Explore Reflo Hub’s compliance with PIPEDA, CCPA/CPRA, and GDPR, ensuring transparent and secure handling of personal data for our SaaS platform users."
          />
          <meta
            name="keywords"
            content="Reflo Hub privacy, PIPEDA compliance, CCPA notice, GDPR compliance, data protection, personal information, privacy policy, SaaS platform"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Document;