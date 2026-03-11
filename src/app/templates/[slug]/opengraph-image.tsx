import { ImageResponse } from 'next/og';
import { getTemplateBySlug, getAllTemplateSlugs } from '@/lib/templates';

export const alt = 'Glide Template';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllTemplateSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  const name = template?.name || 'Glide Template';
  const category = template?.category || 'Business App';
  const price = template ? `$${template.price.toLocaleString()}` : '';

  return new ImageResponse(
    (
      <div
        style={{
          background: '#282828',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#C5EF48',
          }}
        />
        {/* Category badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              background: 'rgba(197, 239, 72, 0.15)',
              border: '1px solid rgba(197, 239, 72, 0.3)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '18px',
              color: '#C5EF48',
            }}
          >
            {category}
          </span>
          {price && (
            <span style={{ fontSize: '18px', color: '#aaa' }}>{price} USD</span>
          )}
        </div>
        {/* Template name */}
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            margin: 0,
            flex: 1,
          }}
        >
          {name}
        </h1>
        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #444',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="24" height="34" viewBox="0 0 20 28" fill="none">
              <path d="M9.68688 27.9999H0.333252L10.313 0.333252H19.6666L9.68688 27.9999Z" fill="#705CF6"/>
            </svg>
            <span style={{ color: '#aaa', fontSize: '18px' }}>LOW / CODE Agency</span>
          </div>
          <span style={{ color: '#666', fontSize: '16px' }}>glideapptemplates.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
