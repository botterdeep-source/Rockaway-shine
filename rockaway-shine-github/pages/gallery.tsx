import Head from 'next/head';
import { useState } from 'react';
import {
  BeforeAfterSlider,
  CAR_IMAGE,
  FALL_IMAGE,
  MOWING_IMAGE,
  MULCH_IMAGE,
  Seo,
  SiteShell,
  transformations,
} from '../components/site';

const categories = [
  'All work',
  'Auto detailing',
  'Mulching',
  'Cleanups',
  'Weed Control',
  'Trimming',
];

const photos = [
  {
    src: CAR_IMAGE,
    alt: 'A car being washed by hand',
    label: 'Driveway detail',
    category: 'Auto detailing',
  },
  {
    src: FALL_IMAGE,
    alt: 'Backyard with fallen leaves and garden greenery',
    label: 'Fall cleanup',
    category: 'Cleanups',
  },
  {
    src: FALL_IMAGE,
    alt: 'Garden foliage and weeds along an outdoor bed',
    label: 'Weed and bed cleanup',
    category: 'Weed Control',
  },
  {
    src: MOWING_IMAGE,
    alt: 'Lawn-care workers mowing and trimming a residential lawn',
    label: 'Lawn trimming',
    category: 'Trimming',
  },
  {
    src: MULCH_IMAGE,
    alt: 'Garden bed with plants and mulch',
    label: 'Mulch and planting',
    category: 'Mulching',
  },
];

const galleryItems = [
  ...transformations.map(item => ({
    kind: 'comparison' as const,
    ...item,
  })),
  ...photos.map(photo => ({
    kind: 'photo' as const,
    ...photo,
  })),
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All work');
  const visibleItems =
    selectedCategory === 'All work'
      ? galleryItems
      : galleryItems.filter(
          item => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <SiteShell>
      <Head>
        <Seo
          title="Gallery | Rockaway Shine"
          description="Filter mobile detailing and yard-care examples by service, and compare published before-and-after projects."
        />
      </Head>
      <main>
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow">Gallery</div>
            <h1>Before, after, and the details in between.</h1>
            <p>
              Filter by service or drag a comparison handle to explore
              Rockaway Shine photos.
            </p>
            <div className="breadcrumbs">
              <a href="../">Home</a>
              <span>/</span>
              <span>Gallery</span>
            </div>
          </div>
        </section>

        <section className="section container gallery-section">
          <div className="gallery-filter-bar" role="group" aria-label="Filter gallery by service">
            {categories.map(category => (
              <button
                key={category}
                type="button"
                aria-pressed={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="gallery-count" aria-live="polite">
            {visibleItems.length} {visibleItems.length === 1 ? 'item' : 'items'}
            {selectedCategory === 'All work' ? ' across all services' : ' in ' + selectedCategory}
          </p>
          <div className="gallery-results">
            {visibleItems.map(item =>
              item.kind === 'comparison' ? (
                <BeforeAfterSlider
                  key={item.title}
                  before={item.before}
                  after={item.after}
                  title={item.title}
                />
              ) : (
                <figure className="gallery-item" key={item.label}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>
                    <span>{item.label}</span>
                    <span>{item.category}</span>
                  </figcaption>
                </figure>
              )
            )}
          </div>
          <p className="gallery-note">
            Gallery cards use illustrative Unsplash stock photography.
            Before-and-after sliders use images published in Rockaway Shine’s
            original gallery.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
