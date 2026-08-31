import { useState } from 'react';import SEO from '../components/SEO';import { Areas,CTA } from '../components/Common';import EstimateForm from '../components/EstimateForm';import { siteConfig } from '../data/site';
export function Projects(){const cats=['All','Tree Services','Concrete','Remodeling','Painting','Repairs','Exterior'];const [cat,setCat]=useState('All');const all=[['Concrete','Concrete Driveway Replacement','Spring, TX'],['Tree Services','Tree Removal & Cleanup','Cypress, TX'],['Remodeling','Interior Remodel','Houston, TX'],['Painting','Exterior Painting','Katy, TX'],['Repairs','Rental Property Repairs','Houston, TX'],['Exterior','Property Cleanup','Tomball, TX']];return <><SEO title="Projects | Houston Solutions" description="Browse representative Houston Solutions project categories and replaceable project-photo placeholders." path="/projects"/><section className="pageHero"><div className="container"><h1>Project Gallery</h1><p>Examples by service category. Placeholder images are ready to be replaced with real project photography.</p></div></section><section className="section"><div className="container"><div className="filters">{cats.map(x=><button onClick={()=>setCat(x)} className={cat===x?'active':''}>{x}</button>)}</div><div className="projectGrid">{all.filter(x=>cat==='All'||x[0]===cat).map(x=><article className="projectCard" key={x[1]}><div className="projectImg"/><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section><CTA/></>}
export function About(){return <><SEO title="About Houston Solutions | Houston Home Services" description="Learn about Houston Solutions, a multi-service residential property improvement company serving Houston and surrounding communities." path="/about"/><section className="pageHero"><div className="container"><h1>About Houston Solutions</h1><p>A local, straightforward resource for residential repairs, maintenance, remodeling, exterior work, and property improvement.</p></div></section><section className="section"><div className="container narrow"><h2>One Company. Multiple Solutions.</h2><p>Houston Solutions is positioned to help homeowners, landlords, investors, real estate agents, and property managers coordinate a wide range of property projects through one dependable point of contact.</p><p>Our brand focuses on clear communication, professional workmanship, practical service, and an easy estimate process—without unsupported claims or inflated promises.</p></div></section><Areas/><CTA/></>}
export function ServiceAreas(){return <><SEO title="Houston Service Areas | Houston Solutions" description="Houston Solutions serves Houston and surrounding communities including Spring, The Woodlands, Cypress, Tomball, Katy, Humble, Conroe, and Magnolia." path="/service-areas"/><section className="pageHero"><div className="container"><h1>Houston & Surrounding Service Areas</h1><p>Local residential property services throughout the Houston metro area.</p></div></section><Areas/><CTA/></>}
export function Contact(){return <><SEO title="Contact Houston Solutions" description="Contact Houston Solutions for home services, repairs, remodeling, tree work, concrete, maintenance, and estimate requests." path="/contact"/><section className="pageHero"><div className="container"><h1>Contact Houston Solutions</h1><p>Tell us what you need or call during business hours.</p></div></section><section className="section"><div className="container split"><div><h2>Contact Information</h2><p><strong>Phone:</strong> <a href={siteConfig.phoneHref}>{siteConfig.phone}</a></p><p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p><p><strong>Location:</strong> {siteConfig.location}</p><p><strong>Hours:</strong> {siteConfig.hours}</p></div><EstimateForm compact/></div></section></>}
export function Estimate(){return <><SEO title="Request a Free Estimate | Houston Solutions" description="Tell Houston Solutions about your property project and request a free estimate." path="/request-estimate"/><section className="pageHero"><div className="container"><h1>Request a Free Estimate</h1><p>Tell us about your project and we'll contact you to discuss the next steps.</p></div></section><section className="section"><div className="container narrow"><EstimateForm/></div></section></>}
export function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <>
      <SEO
        title={`${title} | Houston Solutions`}
        description={`${title} for Houston Solutions.`}
        path={`/${isPrivacy ? 'privacy-policy' : 'terms'}`}
      />

      <section className="pageHero small">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          {isPrivacy ? (
            <div className="legalContent">
              <p>
                <strong>Effective Date:</strong> August 30, 2026
                <br />
                <strong>Last Updated:</strong> August 30, 2026
              </p>

              <p>
                Houston Solutions (“Houston Solutions,” “we,” “us,” or “our”)
                respects your privacy and is committed to protecting the
                personal information you provide when you visit our website,
                request an estimate, contact us, or use our services.
              </p>

              <p>
                This Privacy Policy explains what information we may collect,
                how we use it, how it may be shared, and the choices available
                to you.
              </p>

              <h2>1. Information We Collect</h2>

              <p>
                We may collect information that you voluntarily provide through
                our website, including when you request an estimate, contact us,
                upload project photos, call us, or otherwise communicate with us.
              </p>

              <ul>
                <li>First and last name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Property address</li>
                <li>City and ZIP code</li>
                <li>Type of service requested</li>
                <li>Project description</li>
                <li>Estimated project budget</li>
                <li>Preferred contact method</li>
                <li>Preferred contact time</li>
                <li>Photos or files related to your property or project</li>
                <li>Other information you choose to provide</li>
              </ul>

              <p>
                Please do not submit sensitive personal information that is not
                necessary for us to evaluate or perform your requested service.
              </p>

              <h2>2. Information Collected Automatically</h2>

              <p>
                When you visit our website, certain technical information may
                be collected automatically by our website hosting provider or
                other service providers.
              </p>

              <p>This information may include:</p>

              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Referring website</li>
                <li>Date and time of visits</li>
                <li>General website usage information</li>
              </ul>

              <p>
                We may use this information to operate, maintain, secure, and
                improve our website.
              </p>

              <h2>3. How We Use Your Information</h2>

              <p>We may use the information we collect to:</p>

              <ul>
                <li>Respond to inquiries</li>
                <li>Review estimate requests</li>
                <li>Contact you about your project</li>
                <li>Schedule appointments or site visits</li>
                <li>Provide requested home services</li>
                <li>Prepare estimates or proposals</li>
                <li>Communicate regarding current or potential projects</li>
                <li>Provide customer service</li>
                <li>Maintain business and customer records</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud, spam, abuse, or security issues</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>

              <p>
                We may contact you using the communication method you provide,
                including phone, text message, or email.
              </p>

              <h2>4. Project Photos and File Uploads</h2>

              <p>
                Our website may allow you to upload photos or other files
                related to your property or project. These files may be used to
                evaluate the scope of requested work, prepare or discuss an
                estimate, understand property conditions, and communicate
                internally regarding your project.
              </p>

              <p>
                Please avoid uploading documents containing sensitive
                information such as Social Security numbers, financial account
                numbers, passwords, identification documents, or other
                information unrelated to your requested service.
              </p>

              <h2>5. Estimate and Contact Forms</h2>

              <p>
                Information submitted through our website forms may be
                processed by third-party form-processing providers, including
                Formspree.
              </p>

              <p>
                When you submit a form, the information you provide may be
                transmitted to and processed by that provider according to its
                own privacy practices.
              </p>

              <h2>6. Website Hosting</h2>

              <p>
                Our website is hosted using Vercel. Hosting providers may
                process technical information necessary to deliver the website,
                maintain security, detect abuse, and operate their
                infrastructure.
              </p>

              <h2>7. Cookies and Analytics</h2>

              <p>
                Our website may use cookies or similar technologies required
                for normal website operation. If analytics services are enabled
                in the future, those services may collect general information
                about how visitors use the website.
              </p>

              <h2>8. How We Share Information</h2>

              <p>
                Houston Solutions does not sell your personal information to
                third parties for monetary compensation.
              </p>

              <p>We may share information when reasonably necessary with:</p>

              <ul>
                <li>Employees or authorized representatives</li>
                <li>Contractors or subcontractors assisting with your project</li>
                <li>Website hosting providers</li>
                <li>Form-processing providers</li>
                <li>Email or communication providers</li>
                <li>Customer relationship management providers</li>
                <li>Business technology providers</li>
                <li>Professional advisers</li>
                <li>Government authorities when required by law</li>
              </ul>

              <h2>9. Contractors and Service Providers</h2>

              <p>
                Depending on the type of project requested, Houston Solutions
                may work with independent contractors, subcontractors, vendors,
                or other service providers.
              </p>

              <p>
                Information reasonably necessary to evaluate, schedule,
                estimate, or perform your project may be shared with these
                parties.
              </p>

              <h2>10. Text Messages and Phone Calls</h2>

              <p>
                If you provide a telephone number, you authorize Houston
                Solutions to contact you regarding your inquiry, estimate
                request, appointment, or project.
              </p>

              <p>
                Communication may occur by telephone or text message depending
                on the contact method you select. Message and data rates may
                apply depending on your mobile carrier.
              </p>

              <h2>11. Email Communications</h2>

              <p>
                If you provide your email address, we may use it to respond to
                your inquiry, provide estimates, discuss your project, send
                service-related communications, or provide information you
                requested.
              </p>

              <h2>12. Data Security</h2>

              <p>
                We take reasonable administrative and technical measures
                designed to protect information submitted through our website.
                However, no internet transmission, website, email system, or
                electronic storage method is completely secure.
              </p>

              <h2>13. Data Retention</h2>

              <p>
                We may retain personal information for as long as reasonably
                necessary to respond to your inquiry, manage a potential or
                completed project, maintain appropriate business records,
                resolve disputes, and meet legal requirements.
              </p>

              <h2>14. Your Privacy Choices</h2>

              <p>You may contact us to request that we:</p>

              <ul>
                <li>Correct inaccurate contact information</li>
                <li>Update information you previously provided</li>
                <li>Stop certain communications</li>
                <li>
                  Delete information when legally and operationally appropriate
                </li>
              </ul>

              <h2>15. Third-Party Websites</h2>

              <p>
                Our website may contain links to third-party websites or
                services. Houston Solutions is not responsible for the privacy
                practices, security, content, or policies of websites operated
                by third parties.
              </p>

              <h2>16. Children's Privacy</h2>

              <p>
                Our website and services are intended for adults seeking
                property-related services. We do not knowingly collect personal
                information from children under 13 through our website.
              </p>

              <h2>17. Texas Residents</h2>

              <p>
                Houston Solutions operates in Texas and provides services
                primarily in Houston and surrounding communities. We handle
                customer information in accordance with applicable federal and
                Texas privacy laws.
              </p>

              <h2>18. Changes to This Privacy Policy</h2>

              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our website, services, technology, business
                practices, or legal obligations.
              </p>

              <p>
                When changes are made, we will update the Last Updated date at
                the top of this page.
              </p>

              <h2>19. Contact Us</h2>

              <p>
                <strong>Houston Solutions</strong>
                <br />
                Houston, Texas
                <br />
                Phone:{' '}
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                <br />
                Email:{' '}
                <a href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                <br />
                Website: www.solutionshouston.com
              </p>
            </div>
          ) : (
            <div className="legalContent">
              <p>
                Terms of Service content will be added here.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
