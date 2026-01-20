import PageBanner from '../components/PageBanner';
import './Integrations.css';

// Import integration logos
import awsS3Logo from '../assets/Integrations-logos/amazon-s3.svg';
import azureLogo from '../assets/Integrations-logos/azure-2.svg';
import boxLogo from '../assets/Integrations-logos/box-39.svg';
import dropboxLogo from '../assets/Integrations-logos/dropbox-2.svg';
import easyClockingLogo from '../assets/Integrations-logos/easyclocking.png';
import egnyteLogo from '../assets/Integrations-logos/egnyte.jpg';
import ftpLogo from '../assets/Integrations-logos/ftp.jpg';
import geoOpLogo from '../assets/Integrations-logos/GeoOp.jpg';
import bigQueryLogo from '../assets/Integrations-logos/google-bigquery-logo-1.svg';
import googleWorkspaceLogo from '../assets/Integrations-logos/google-g-2015.svg';
import microsoft365Logo from '../assets/Integrations-logos/Microsoft-365.svg';
import mondayLogo from '../assets/Integrations-logos/monday.png';
import netsuiteLogo from '../assets/Integrations-logos/netsuite.svg';
import paycomLogo from '../assets/Integrations-logos/paycom.png';
import powerBiLogo from '../assets/Integrations-logos/power-bi.svg';
import quickbooksLogo from '../assets/Integrations-logos/quickbooks-1.svg';
import restApiLogo from '../assets/Integrations-logos/rest api.jpg';
import samsaraLogo from '../assets/Integrations-logos/samsara.png';
import sqlServerLogo from '../assets/Integrations-logos/microsoft-sql-server-1.svg';
import twilioLogo from '../assets/Integrations-logos/twilio-2.svg';

const Integrations = () => {
  const integrations = [
    {
      name: 'AWS S3',
      logo: awsS3Logo,
      description: 'Connect to Amazon S3 for secure cloud storage and data management.'
    },
    {
      name: 'Azure Blob Storage',
      logo: azureLogo,
      description: 'Integrate with Microsoft Azure Blob Storage for scalable object storage.'
    },
    {
      name: 'Box',
      logo: boxLogo,
      description: 'Sync and share files securely with Box cloud storage.'
    },
    {
      name: 'Dropbox',
      logo: dropboxLogo,
      description: 'Collaborate and store files with Dropbox integration.'
    },
    {
      name: 'EasyClocking',
      logo: easyClockingLogo,
      largeLogo: true,
      description: 'Connect with EasyClocking for time attendance management.'
    },
    {
      name: 'Egnyte',
      logo: egnyteLogo,
      description: 'Integrate with Egnyte for secure file sharing and storage.'
    },
    {
      name: 'FTP',
      logo: ftpLogo,
      description: 'Connect via FTP for reliable file transfer operations.'
    },
    {
      name: 'GeoOp',
      logo: geoOpLogo,
      largeLogo: true,
      description: 'Integrate with GeoOp for field service management.'
    },
    {
      name: 'Google BigQuery',
      logo: bigQueryLogo,
      description: 'Analyze massive datasets with Google BigQuery integration.'
    },
    {
      name: 'Google Workspace',
      logo: googleWorkspaceLogo,
      description: 'Connect with Google Workspace for collaboration tools.'
    },
    {
      name: 'Microsoft 365',
      logo: microsoft365Logo,
      description: 'Integrate with Microsoft 365 for productivity applications.'
    },
    {
      name: 'Monday.com',
      logo: mondayLogo,
      description: 'Sync with Monday.com for project management and workflows.'
    },
    {
      name: 'NetSuite',
      logo: netsuiteLogo,
      description: 'Connect with NetSuite for ERP and business management.'
    },
    {
      name: 'Paycom',
      logo: paycomLogo,
      description: 'Integrate with Paycom for payroll and HR management.'
    },
    {
      name: 'Power BI',
      logo: powerBiLogo,
      description: 'Visualize data with Microsoft Power BI integration.'
    },
    {
      name: 'QuickBooks',
      logo: quickbooksLogo,
      description: 'Sync financial data with QuickBooks accounting software.'
    },
    {
      name: 'REST APIs',
      logo: restApiLogo,
      largeLogo: true,
      description: 'Connect custom applications using REST API endpoints.'
    },
    {
      name: 'Samsara',
      logo: samsaraLogo,
      largeLogo: true,
      description: 'Integrate with Samsara for fleet and operations management.'
    },
    {
      name: 'SQL Server',
      logo: sqlServerLogo,
      largeLogo: true,
      description: 'Connect to SQL Server databases for data operations.'
    },
    {
      name: 'Twilio',
      logo: twilioLogo,
      description: 'Enable SMS and communication features with Twilio.'
    },
    {
      name: 'Custom',
      logo: null,
      icon: 'fas fa-puzzle-piece',
      description: 'Build custom integrations tailored to your specific needs.'
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
                      className={integration.largeLogo ? 'logo-large' : ''}
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
