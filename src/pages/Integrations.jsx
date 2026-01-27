import PageBanner from '../components/PageBanner';
import './Integrations.css';

// Import integration logos
import mondayLogo from '../assets/Integrations-logos/monday.png';
import netsuiteLogo from '../assets/Integrations-logos/netsuite.svg';
import quickbooksLogo from '../assets/Integrations-logos/quickbooks-1.svg';
import restApiLogo from '../assets/Integrations-logos/rest api.jpg';
import samsaraLogo from '../assets/Integrations-logos/samsara.png';
import twilioLogo from '../assets/Integrations-logos/twilio-2.svg';
import acumaticaLogo from '../assets/Integrations-logos/acumatica-logo-stacked-light-2024 (1).png';
import xeroLogo from '../assets/Integrations-logos/xero.svg';
import geotabLogo from '../assets/Integrations-logos/geotab.png';
import mtrackLogo from '../assets/Integrations-logos/mtrack.jpg';
import cellcastLogo from '../assets/Integrations-logos/cellcast.jpg';
import awsSnsLogo from '../assets/Integrations-logos/aws-sns.svg';
import webhooksLogo from '../assets/Integrations-logos/webhooks.svg';

const Integrations = () => {
  const integrations = [
    {
      name: 'NetSuite',
      logo: netsuiteLogo,
      description: 'Connect with NetSuite for ERP and business management.'
    },
    {
      name: 'QuickBooks',
      logo: quickbooksLogo,
      description: 'Sync financial data with QuickBooks accounting software.'
    },
    {
      name: 'Monday',
      logo: mondayLogo,
      description: 'Sync with Monday.com for project management and workflows.'
    },
    {
      name: 'Acumatica',
      logo: acumaticaLogo,
      description: 'Cloud ERP solution for business management.'
    },
    {
      name: 'Xero',
      logo: xeroLogo,
      description: 'Online accounting software for your business.'
    },
    {
      name: 'Samsara',
      logo: samsaraLogo,
      largeLogo: true,
      description: 'Integrate with Samsara for fleet and operations management.'
    },
    {
      name: 'GeoTab',
      logo: geotabLogo,
      fullSize: true,
      description: 'Fleet management and vehicle tracking integration.'
    },
    {
      name: 'MTrack',
      logo: mtrackLogo,
      fullSize: true,
      description: 'Advanced tracking and fleet management solution.'
    },
    {
      name: 'Twilio',
      logo: twilioLogo,
      description: 'Enable SMS and communication features with Twilio.'
    },
    {
      name: 'CellCast',
      logo: cellcastLogo,
      fullSize: true,
      description: 'Broadcast messaging and communication platform.'
    },
    {
      name: 'AWS SNS',
      logo: awsSnsLogo,
      description: 'Amazon Simple Notification Service for pub/sub messaging.'
    },
    {
      name: 'Rest APIs',
      logo: restApiLogo,
      largeLogo: true,
      description: 'Connect custom applications using REST API endpoints.'
    },
    {
      name: 'Webhooks',
      logo: webhooksLogo,
      description: 'Real-time data updates via automated webhooks.'
    }
  ];

  return (
    <div className="integrations-page">
      <PageBanner title="Integrations" />

      <section className="integrations-hero">
        <div className="container">
          <div className="eyebrow-container-center">
            <span className="eyebrow-line"></span>
            <p className="eyebrow-text">Connect Your Tools</p>
          </div>
          <h1 className="integrations-title">One Platform for Endless Connections.</h1>
          <p className="integrations-subtitle">
            Integrate leading tools to build a connected and efficient oilfield ecosystem with Orriun Atlas.
          </p>
        </div>
      </section>

      <section className="integrations-grid-section">
        <div className="container">
          <div className="integrations-grid">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="integration-card scroll-animate"
                data-animate="fade-up"
                data-delay={index * 10}
              >
                <div className="integration-icon">
                  {integration.logo ? (
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className={`${integration.largeLogo ? 'logo-large' : ''} ${integration.fullSize ? 'logo-full' : ''}`}
                    />
                  ) : (
                    <i className={integration.icon}></i>
                  )}
                </div>
                <h3 className="integration-name">{integration.name}</h3>
                <p className="integration-description">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
