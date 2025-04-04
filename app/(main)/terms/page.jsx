'use client';
import FooterLift from '@/components/footer-lift';
import Header from '@/components/ui/custom/Header';
import Link from 'next/link';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-300">
      <title>LiftCode - Terms and Conditions</title>
      <div className='bg-black sticky top-0 inset-x-0'>
        <Header/>
      </div>

      <main className="max-w-7xl mx-auto p-6 pb-36">
        <div className='py-24'>
          <h1 className="text-4xl font-medium text-gray-800 mt-24">
            Terms and Conditions of Use
          </h1>
          <p className="text-gray-500 mt-4">
            These comprehensive Terms and Conditions (&quot;Agreement&quot;) govern all access and use of LiftCode AI platform and related services (&quot;Services&quot;) provided by BrinPage Software (&quot;Company&quot;). By accessing or using any Services, you agree to be legally bound by all provisions herein.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">1. Platform Overview</h2>
          <p className="text-neutral-500 my-4">
            LiftCode AI is an advanced artificial intelligence platform specializing in fullstack code generation, project visualization, and collaborative development tools. The Services include but are not limited to: real-time AI-assisted coding, credit-based resource allocation, cloud-based project management, and integration with third-party development tools. The platform operates under a continuous improvement model, with regular updates to AI models and feature enhancements.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">2. Explicit Consent Protocol</h2>
          <p className="text-neutral-500 my-4">
            By creating an account, you explicitly consent through active checkbox confirmation to: (a) these Terms; (b) Privacy Policy; and (c) Data Processing Addendum (DPA). API users must include valid compliance headers confirming legal jurisdiction. Usage thresholds are defined in Schedule A - Fair Use Policy, available publicly at [URL], with real-time consumption metrics visible in user dashboard.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">3. Security Responsibilities</h2>
          <p className="text-neutral-500 my-4">
            Users must report suspected unauthorized access within 72 hours (extended to 14 days for EU/UK users under GDPR). BrinPage maintains SOC 2-compliant security infrastructure but users remain responsible for credential protection. AI outputs include digital integrity watermarks and carry limited warranty against material defects verifiable through our Validation API.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">4. AI-Generated Content</h2>
          <p className="text-neutral-500 my-4">
            All code outputs, documentation, and visualizations produced through the Services (&quot;Generated Assets&quot;) undergo rigorous quality assurance processes but are provided without explicit warranty. Users must independently verify Generated Assets for functionality, security, and compliance with target deployment environments. The Company disclaims responsibility for any damages arising from implementation of Generated Assets in production systems.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">5. Intellectual Property Framework</h2>
          <p className="text-neutral-500 my-4">
            BrinPage retains exclusive ownership of all platform components including but not limited to neural network architectures, training methodologies, UI/UX patterns, API structures, and documentation systems. The limited license granted to users applies only to final code outputs (&quot;Artifacts&quot;) and specifically excludes intermediate model weights, latent space representations, or any proprietary data structures generated during the code synthesis process. Commercial use of Artifacts in products generating over $1M annual revenue requires written authorization and potential royalty agreements. 
          </p>
          <p className="text-neutral-500 my-4">
            User-provided materials including code snippets, specification documents, and design assets (&quot;User Content&quot;) remain user property subject to irrevocable, worldwide, sublicensable license allowing BrinPage to use, modify, and derive works from User Content for platform improvement and commercial operations. This includes rights to process User Content through machine learning models, generate synthetic training data, and incorporate anonymized patterns into public-facing features. Users warrant they possess necessary rights to all submitted User Content and indemnify BrinPage against third-party IP claims arising from User Content processing.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">5.2 Intellectual Property Rights</h2>
          <p className="text-neutral-500 my-4">
            Users grant BrinPage a non-exclusive license limited to service operation and improvement. ML training opt-out available in account settings. Commercial use requires attribution (&quot;Powered by LiftCode&quot;) in projects exceeding 30% AI-generated code. Royalty-free up to $10M annual revenue, with negotiated licenses beyond this threshold.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">6. Transparent Credit System</h2>
          <p className="text-neutral-500 my-4">
            1 credit = 10.5s &plusmn;0.5s of NVIDIA A100 GPU time or 1024 tokens (whichever occurs first), measured per ISO/IEC 23894:2023 standards. Paid credits never expire. Unused free credits roll over for 3 months. Detailed consumption logs available via API with dispute resolution within 7 business days.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">7. Restricted Use Cases</h2>
          <p className="text-neutral-500 my-4">
            Prohibited applications include medical devices (ISO 13485), nuclear systems (IAEA standards), and autonomous vehicles (SAE J3016). Users must complete compliance checklist before deploying in financial (PCI DSS) or government (NIST 800-171) contexts. BrinPage provides automated IP screening using Copyright Office databases, with indemnification for verified platform errors.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">8. Data Handling</h2>
          <p className="text-neutral-500 my-4">
            All data processing operations comply with ISO 27001, SOC 2 Type II, and NIST Cybersecurity Framework standards. User Content undergoes automatic classification using proprietary AI models to detect sensitive information (PII, PHI, financial data) which triggers enhanced encryption protocols. Processing data is segmented into three tiers: (1) Ephemeral Cache (retained &le;24 hours for real-time operations), (2) Active Project Storage (retained &le;30 days post-last access), and (3) Archival Backups (encrypted snapshots retained &le;5 years for legal compliance). 
          </p>
          <p className="text-neutral-500 my-4">
            Data sovereignty requirements can be negotiated through enterprise contracts, allowing specification of geographic storage regions and custom retention schedules. All cross-border data transfers utilize EU-approved Standard Contractual Clauses (SCCs) with supplementary technical safeguards. Breach notification protocols adhere to GDPR Article 33 timelines (72 hours) for EU users and CCPA requirements for California residents, with proportional extensions for less critical incidents based on NIST Risk Assessment Framework classifications.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">8.1 Compliant Data Management</h2>
          <p className="text-neutral-500 my-4">
            Data retention: 30 days active, 13 months archival (adjustable per GDPR/LGPD requests). Deletion tool available in dashboard with automated chain-of-custody reports. Regional pods available in EU (Frankfurt), NA (Virginia), and APAC (Singapore) with data localization locks. Breach notifications within 96 hours globally, aligned with strictest applicable law.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">9. Service Availability</h2>
          <p className="text-neutral-500 my-4">
            Target uptime for core services is 99.5% monthly, excluding scheduled maintenance windows announced 72 hours in advance. Beta features carry no uptime guarantees and may be modified or discontinued without notice. The Company maintains global CDN infrastructure but makes no guarantees regarding regional availability or performance consistency across geographical locations.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">10. Third-Party Integrations</h2>
          <p className="text-neutral-500 my-4">
            The platform integrates with various external services including GitHub, AWS, and Docker Hub. These integrations are provided &quot;as-is&quot; and the Company accepts no liability for third-party service disruptions. Users must maintain valid licenses for all integrated services and assume responsibility for credential management across connected platforms. API call limits apply to prevent service abuse.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">11. Fair Payment Terms</h2>
          <p className="text-neutral-500 my-4">
            EU/UK users receive 14-day statutory refund rights. Pro-rata refunds for unused paid credits within 30 days. Chargebacks resolved through mediation before suspension. Price changes exempt existing contracts for 6 months. Enterprise SLAs include quarterly true-up adjustments.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">12. Liability Structure</h2>
          <p className="text-neutral-500 my-4">
            Under no circumstances shall BrinPage&apos;s aggregate liability exceed the total fees paid by user during the 12-month period preceding the claim. This limitation applies to all causes of action including contract, tort, strict liability, and statutory claims. Explicit exclusions include: damages arising from unauthorized third-party access to user credentials; implementation of Generated Assets in unvalidated production environments; misuse of API endpoints through rate limit violations; and failures caused by incompatible third-party software or hardware configurations.
          </p>
          <p className="text-neutral-500 my-4">
            Users agree to defend, indemnify, and hold harmless BrinPage from all claims, damages, losses, and expenses (including reasonable attorneys&apos; fees) relating to: (a) violation of export control regulations; (b) incorporation of Generated Assets into medical devices, aviation systems, or other safety-critical applications; (c) breach of third-party service terms through platform integrations; (d) tax miscalculations related to commercial use of Artifacts; and (e) regulatory penalties incurred through non-compliant data handling practices. This indemnification obligation survives termination of these Terms and cessation of Services use.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">12.1 Balanced Liability</h2>
          <p className="text-neutral-500 my-4">
            Liability cap: 24 months fees or &euro;500,000 (whichever lower), excluding: (a) statutory warranties; (b) IP infringement; (c) personal injury. Indemnification limited to user-controlled actions. Third-party service issues governed by separate bilateral agreements.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">13. Termination &amp; Export</h2>
          <p className="text-neutral-500 my-4">
            30-day data export window with bulk download tools and physical media options for &gt;1TB. Post-termination, data encrypted for 90 days before secure erasure (NIST 800-88). Enterprise transition assistance available through professional services.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">14. Jurisdiction Options</h2>
          <p className="text-neutral-500 my-4">
            EU/UK users may choose local arbitration (ICC Rules). Class actions permitted where prohibited by law. Governing law follows user headquarters location for businesses, or residence for individuals. Escalation process includes mandatory 60-day negotiation period.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">15. Change Management</h2>
          <p className="text-neutral-500 my-4">
            Material changes notified 45 days in advance with redline comparisons. Emergency security updates include 72-hour post-implementation notice. Version history maintained for 7 years. Users may terminate without penalty within 14 days of unfavorable changes.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">16. Enterprise Provisions</h2>
          <p className="text-neutral-500 my-4">
            Corporate users may negotiate custom terms including: Service Level Agreements (SLAs) with financial penalties for downtime; dedicated compute resources; extended data retention periods; and private model training. Enterprise contracts require separate signatures from authorized officers and supersede these general terms where conflicts exist. Volume discounts apply at $100k+ annual commitments.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">17. Beta Features</h2>
          <p className="text-neutral-500 my-4">
            Features designated as Beta undergo rigorous internal testing but are excluded from standard SLAs and warranty coverage. Users acknowledge that Beta features may: (a) produce non-deterministic outputs under identical inputs; (b) contain undisclosed data retention policies; (c) exhibit performance degradation during peak loads; and (d) require manual intervention for error recovery. Access to Beta features is granted at Company&apos;s sole discretion and may be revoked without notice if usage patterns indicate potential system instability or resource contention.
          </p>
          <p className="text-neutral-500 my-4">
            Feedback on Beta features becomes BrinPage&apos;s exclusive property without compensation or attribution requirements. Users waive all moral rights to feedback submissions and grant unlimited rights to commercialize improvements derived from feedback analysis. Critical vulnerabilities discovered in Beta systems must be reported through coordinated disclosure channels with 90-day embargo periods before public discussion. Unauthorized reverse engineering of Beta components constitutes material breach of these Terms.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">17.1 Ethical Beta Testing</h2>
          <p className="text-neutral-500 my-4">
            Beta features include clear data practice labels and limited 60-day retention. Vulnerability reporting follows CERT/CC guidelines with 30-day vendor notification. Test environments isolated from production data. Participants receive liability protection for good-faith testing errors.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">18. Compliance Requirements</h2>
          <p className="text-neutral-500 my-4">
            Users must ensure compliance with all applicable export controls, sanctions programs, and technology transfer regulations. Prohibited jurisdictions include regions under U.S. embargo. Developers working on government projects must disclose this usage and obtain written approval from Company compliance officers prior to Service utilization in public sector applications.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">19. Audit Rights</h2>
          <p className="text-neutral-500 my-4">
            Audits require 30-day notice, limited to compliance verification. Conducted through secure virtual data rooms. User may redact unrelated sensitive information. Findings remain confidential under mutual NDA.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">Definitions Annex</h2>
          <p className="text-neutral-500 my-4">
            Material Breach: Failure impacting core functionality for &gt;72h. Life-Critical Systems: Applications where failure could cause death, injury, or environmental disaster. Reasonable Usage: &le;95th percentile of similar user patterns measured quarterly.
          </p>
        </div>

        <div className="text-left mt-10">
          <h2 className="text-xl font-medium text-neutral-900">20. Contact Protocol</h2>
          <p className="text-neutral-500 my-4">
            Legal notices must be served via registered mail to: BrinPage Legal Department, 123 AI Innovation Boulevard, Suite 4500, San Francisco, CA 94107, USA with copy to legal@brinpage.com. Technical support inquiries should be directed through platform ticketing system. Emergency security issues require immediate support@liftcode.net followed by written report within 24 hours.
          </p>
        </div>
      </main>

      <FooterLift/>
    </div>
  );
};

export default App;