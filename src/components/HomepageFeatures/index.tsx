import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Media Kit',
    emoji: '📦',
    description: (
      <>
        Access official RuneRealm branding assets, logos, and partner usage guidelines in our comprehensive media kit.
      </>
    ),
    link: '/media-kit',
  },
  {
    title: 'Game Info',
    emoji: '📖',
    description: (
      <>
        Learn about the world of RuneRealm — explore lore, gameplay mechanics, blockchain features, and more.
      </>
    ),
    link: '/docs',
  },
  {
    title: 'News & Updates',
    emoji: '📰',
    description: (
      <>
        Stay informed with the latest patch notes, developer insights, and ecosystem announcements from RuneRealm.
      </>
    ),
    link: '/news',
  },
];

function Feature({title, emoji, description, link}: FeatureItem) {
  return (
    <Link to={link} className={styles.featureLink}>
      <div className="text--center">
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={clsx('container', styles.features)}>
      {FeatureList.map((props) => (
        <Feature key={props.title} {...props} />
      ))}
    </section>
  );
}
