import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type HomepageHeaderProps = {
  title: string;
  tagline: string;
};

function HomepageHeader({title, tagline}: HomepageHeaderProps) {
  return (
    <header className={clsx('glass-effect', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{title}</Heading>
        <p className="hero__subtitle">{tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButton)}
            to="/docs">
            Start Here - 1min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Official documentation for RuneRealm - #1 Onchain MMORPG"
    >
      <HomepageHeader title={siteConfig.title} tagline={siteConfig.tagline} />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
