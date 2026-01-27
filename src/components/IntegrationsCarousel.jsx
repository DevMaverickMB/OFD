import React from 'react';
import './IntegrationsCarousel.css';

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

const IntegrationsCarousel = () => {
    const integrations = [
        { name: 'NetSuite', logo: netsuiteLogo },
        { name: 'QuickBooks', logo: quickbooksLogo },
        { name: 'Monday', logo: mondayLogo },
        { name: 'Acumatica', logo: acumaticaLogo },
        { name: 'Xero', logo: xeroLogo },
        { name: 'Samsara', logo: samsaraLogo, largeLogo: true },
        { name: 'GeoTab', logo: geotabLogo, fullSize: true },
        { name: 'MTrack', logo: mtrackLogo, fullSize: true },
        { name: 'Twilio', logo: twilioLogo },
        { name: 'CellCast', logo: cellcastLogo, fullSize: true },
        { name: 'AWS SNS', logo: awsSnsLogo },
        { name: 'Rest APIs', logo: restApiLogo, largeLogo: true },
        { name: 'Webhooks', logo: webhooksLogo }
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
                                    className={`${item.largeLogo ? 'logo-large' : ''} ${item.fullSize ? 'logo-full' : ''}`}
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
