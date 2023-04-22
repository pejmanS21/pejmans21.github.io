import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'ML Engineer',
    Svg: require('@site/static/img/ai/ai.svg').default,
    description: (
      <>
        As an ML Engineer working in the medical field, 
        I have developed machine learning algorithms that have helped <code>detect</code> & <code>segment</code> lungs in <strong>CXR</strong> images.
      </>
    ),
  },
  {
    title: 'DevOps / MLOps Engineer',
    Svg: require('@site/static/img/developer/Software-Developer.svg').default,
    description: (
      <>
        As a DevOps Engineer, I have developed Continuous Integration / Delivery <code>CI/CD</code> pipelines,
        and have experience with automation tools like <code>GitLab-CI</code>.
      </>
    ),
  },
  {
    title: 'iOS Developer',
    Svg: require('@site/static/img/ai/ios.svg').default,
    description: (
      <>
        As ML Engineer, I am currently learning <strong>iOS development</strong> to deploy machine learning models 
        on mobile devices with greater efficiency and accuracy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
