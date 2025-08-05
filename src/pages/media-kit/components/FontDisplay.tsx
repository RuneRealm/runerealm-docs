import React, { JSX } from 'react';
import styles from './FontDisplay.module.css';

interface FontExample {
    name: string;
    family: string;
    weights: {
        weight: string;
        name: string;
        sample: string;
    }[];
    usage: string;
}

const fonts: FontExample[] = [
    {
        name: 'Heading Font',
        family: 'Inter',
        weights: [
            {
                weight: '600',
                name: 'Semi Bold',
                sample: 'RuneRealm conquers realms of imagination'
            },
            {
                weight: '400',
                name: 'Regular',
                sample: 'RuneRealm conquers realms of imagination'
            }
        ],
        usage: 'Used for primary headings (H1 & H2).'
    },
    {
        name: 'Body Font',
        family: 'Roboto Condensed',
        weights: [
            {
                weight: '300',
                name: 'Light',
                sample: 'Dive into the RuneRealm and explore endlessly'
            },
            {
                weight: '400',
                name: 'Regular',
                sample: 'Dive into the RuneRealm and explore endlessly'
            }
        ],
        usage: 'Used for paragraphs, body text, and smaller headers.'
    }
];

export default function FontDisplay(): JSX.Element {
    return (
        <div className={styles.fontContainer}>
            {fonts.map((font) => (
                <div key={font.name} className={styles.fontFamily}>
                    <div className={styles.fontHeader}>
                        <h3>{font.name}</h3>
                        <span className={styles.fontMeta}>Font Family: {font.family}</span>
                        <p className={styles.fontUsage}>{font.usage}</p>
                    </div>

                    <div className={styles.weightExamples}>
                        {font.weights.map((weight) => (
                            <div key={weight.weight} className={styles.weightExample}>
                                <div className={styles.weightInfo}>
                                    <span className={styles.weightName}>{weight.name}</span>
                                    <span className={styles.weightValue}>{weight.weight}</span>
                                </div>
                                <p
                                    className={styles.sampleText}
                                    style={{
                                        fontFamily: font.family,
                                        fontWeight: weight.weight as any
                                    }}
                                >
                                    {weight.sample}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
