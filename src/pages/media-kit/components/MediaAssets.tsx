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
        dimensions: '2120x2120px'
    },
    {
        name: 'RuneRealm Poster',
        preview: '/media-kit/assets/runerealm-poster.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/runerealm-poster.png' }
        ],
        dimensions: '4096x4096px'
    },
    {
        name: 'Eternal Pass',
        preview: '/media-kit/assets/eternal-pass.png',
        formats: [
            { type: 'PNG', url: '/media-kit/assets/eternal-pass.png' }
        ],
        dimensions: '476x408px'
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