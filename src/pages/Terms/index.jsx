import { useEffect } from 'react'
import TermsConditions from './TermsConditions'
import CookiePolicy from './CookiePolicy'
import PrivacyPolicy from './PrivacyPolicy'

export default function Terms() {
  useEffect(() => {
    const title = 'Terms & Conditions | Holidaze';
    document.title = title;

    const description = 'Read the terms and conditions, cookie policy, and privacy policy for using Holidaze.';
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="leading-relaxed pt-8 md:pt-10 2xl:pt-12 text-sm md:text-base">
      <TermsConditions />
      <CookiePolicy />
      <PrivacyPolicy />
    </div>
  );
}