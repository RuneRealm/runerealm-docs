import React, { JSX, useState } from 'react';
import styles from './ColorPalette.module.css';

interface ColorSwatch {
    name: string;
    hex?: string;
    rgba?: string;
    gradient?: string;
    description?: string;
}

const brandColors: ColorSwatch[] = [
    {
        name: 'Rune Brown 1',
        hex: '#814E33',
        description: 'Primary brown tone used for core brand elements.'
    },
    {
        name: 'Rune Brown 2',
        hex: '#73452E',
    },
    {
        name: 'Rune Brown 3',
        hex: '#693F2A',
    },
    {
        name: 'Rune Brown 4',
        hex: '#573320',
    },
    {
        name: 'Rune Brown 5',
        hex: '#8C5537',
    },
    {
        name: 'Rune Brown 6',
        hex: '#99603F',
    },
    {
        name: 'Rune Brown 7',
        hex: '#A86D4A',
        description: 'Used for hover and accent states.'
    },
    {
        name: 'Rune Gold Light',
        hex: '#FCF5D8',
        description: 'Background and highlight areas.'
    },
    {
        name: 'Rune Shadow',
        hex: '#0D0705',
    },
    {
        name: 'Rune Brown Tint',
        rgba: 'rgba(129, 78, 51, 0.1)',
        description: 'Used for subtle overlays or backgrounds.'
    },
    {
        name: 'Rune Orange 1',
        hex: '#F4860A',
        description: 'Call-to-action or alert orange.'
    },
    {
        name: 'Rune Orange 2',
        hex: '#DC7709',
    },
    {
        name: 'Rune Orange 3',
        hex: '#C06807',
    },
    {
        name: 'Rune Orange 4',
        hex: '#9A5406',
    },
    {
        name: 'Rune Orange 5',
        hex: '#F5961C',
    },
    {
        name: 'Rune Orange 6',
        hex: '#F7A33D',
    },
    {
        name: 'Rune Orange 7',
        hex: '#F9B866',
    },
    {
        name: 'Rune Background Dark',
        hex: '#1A0F0A',
        description: 'Used as primary dark background.'
    },
    {
        name: 'Rune Orange Tint',
        rgba: 'rgba(244, 134, 10, 0.1)',
    }
];

interface ColorCardProps {
    color: ColorSwatch;
    copiedColor: string | null;
    onCopy: (value: string) => void;
}

function ColorCard({ color, copiedColor, onCopy }: ColorCardProps) {
    const displayColor = color.hex || color.rgba || color.gradient || '';

    return (
        <div className={styles.colorCard}>
            <div className={styles.colorSwatch}>
                <div
                    style={{
                        background: displayColor,
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
            <div className={styles.colorInfo}>
                <h3>{color.name}</h3>
                {displayColor && (
                    <button className={styles.hexButton} onClick={() => onCopy(displayColor)}>
                        {displayColor}
                        <span className={styles.copyIndicator}>
                            {copiedColor === displayColor ? 'Copied!' : 'Click to copy'}
                        </span>
                    </button>
                )}
                {color.description && (
                    <p className={styles.description}>{color.description}</p>
                )}
            </div>
        </div>
    );
}

export default function ColorPalette(): JSX.Element {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopiedColor(value);
        setTimeout(() => setCopiedColor(null), 2000);
    };

    return (
        <div className={styles.colorGrid}>
            {brandColors.map((color) => (
                <ColorCard
                    key={color.name}
                    color={color}
                    copiedColor={copiedColor}
                    onCopy={copyToClipboard}
                />
            ))}
        </div>
    );
}
