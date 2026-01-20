import React from 'react';
import './IntegrationsCarousel.css';

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

const IntegrationsCarousel = () => {
    const integrations = [
        { name: 'AWS S3', logo: awsS3Logo },
        { name: 'Azure Blob Storage', logo: azureLogo },
        { name: 'Box', logo: boxLogo },
        { name: 'Dropbox', logo: dropboxLogo },
        { name: 'EasyClocking', logo: easyClockingLogo, largeLogo: true },
        { name: 'Egnyte', logo: egnyteLogo },
        { name: 'FTP', logo: ftpLogo },
        { name: 'GeoOp', logo: geoOpLogo, largeLogo: true },
        { name: 'Google BigQuery', logo: bigQueryLogo },
        { name: 'Google Workspace', logo: googleWorkspaceLogo },
        { name: 'Microsoft 365', logo: microsoft365Logo },
        { name: 'Monday.com', logo: mondayLogo },
        { name: 'NetSuite', logo: netsuiteLogo },
        { name: 'Paycom', logo: paycomLogo },
        { name: 'Power BI', logo: powerBiLogo },
        { name: 'QuickBooks', logo: quickbooksLogo },
        { name: 'REST APIs', logo: restApiLogo, largeLogo: true },
        { name: 'Samsara', logo: samsaraLogo, largeLogo: true },
        { name: 'SQL Server', logo: sqlServerLogo, largeLogo: true },
        { name: 'Twilio', logo: twilioLogo },
        { name: 'Custom', logo: null, icon: 'fas fa-puzzle-piece' }
    ];

    // Duplicate the array to ensure seamless scrolling
    const carouselItems = [...integrations, ...integrations, ...integrations];

    return (
        <div className="integrations-carousel-wrapper">
            <div className="integrations-carousel-track">
                {carouselItems.map((item, index) => (
                    <div key={index} className="integration-carousel-item">
                        <div className="carousel-logo-container">
                            {item.logo ? (
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className={item.largeLogo ? 'logo-large' : ''}
                                />
                            ) : (
                                <i className={item.icon}></i>
                            )}
                        </div>
                        <div className="carousel-item-name">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IntegrationsCarousel;
