import React, { JSX } from 'react';
import styles from './MediaAssets.module.css';

interface MediaAsset {
    name: string;
    preview: string;
    formats: {
        type: string;
        url: string; 
    }[];
    dimensions?: string;
    background?: 'light' | 'dark';
}

const mediaAssets: MediaAsset[] = [
    {
        name: 'RuneRealm Logo',
        preview: '/media-kit/assets/runerealm-logo.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/runerealm-logo.png' },
        ],
        dimensions: '2120x1080px'
    },
    {
        name: 'Eternal Pass',
        preview: '/media-kit/assets/eternal-pass.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/eternal-pass.png' }
        ],
        dimensions: '476x408px'
    },
    {
        name: 'Background 1',
        preview: '/media-kit/assets/bg1.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/bg1.png' }
        ],
        dimensions: '1536x1024px'
    },
    {
        name: 'Background 2',
        preview: '/media-kit/assets/bg2.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/bg2.png' }
        ],
        dimensions: '1792x1024px'
    },
    {
        name: 'Aqua Guardians',
        preview: '/media-kit/assets/aqua-guardians.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/aqua-guardians.png' }
        ],
        dimensions: '384x576px'
    },
    {
        name: 'Inferno Blades',
        preview: '/media-kit/assets/inferno-blades.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/inferno-blades.png' }
        ],
        dimensions: '384x576px'
    },
    {
        name: 'Sky Nomads',
        preview: '/media-kit/assets/sky-nomads.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/sky-nomads.png' }
        ],
        dimensions: '384x576px'
    },
    {
        name: 'Stone Titans',
        preview: '/media-kit/assets/stone-titans.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/stone-titans.png' }
        ],
        dimensions: '384x576px'
    },
    {
        name: 'Air Berries',
        preview: '/media-kit/assets/air-berries.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/air-berries.png' }
        ],
        dimensions: '128x128px'
    },
    {
        name: 'Fire Berries',
        preview: '/media-kit/assets/fire-berries.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/fire-berries.png' }
        ],
        dimensions: '128x128px'
    },
    {
        name: 'Rock Berries',
        preview: '/media-kit/assets/rock-berries.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/rock-berries.png' }
        ],
        dimensions: '128x128px'
    },
    {
        name: 'Water Berries',
        preview: '/media-kit/assets/water-berries.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/water-berries.png' }
        ],
        dimensions: '128x128px'
    }
];

export default function MediaAssets(): JSX.Element {
    return (
        <div className={styles.mediaGrid}>
            {mediaAssets.map((asset) => (
                <div
                    key={asset.name}
                    className={styles.mediaCard}
                >
                    <div
                        className={`${styles.previewContainer} ${asset.background === 'dark' ? styles.darkBg : ''}`}
                    >
                        <img
                            src={asset.preview}
                            alt={`${asset.name} preview`}
                            className={styles.previewImage}
                        />
                    </div>
                    <div className={styles.mediaInfo}>
                        <h3>{asset.name}</h3>
                        {asset.dimensions && (
                            <span className={styles.dimensions}>{asset.dimensions}</span>
                        )}
                        <div className={styles.formatLinks}>
                            {asset.formats.map((format) => (
                                <a
                                    key={format.type}
                                    href={format.url}
                                    download
                                    className={styles.formatButton}
                                >
                                    {format.type}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}