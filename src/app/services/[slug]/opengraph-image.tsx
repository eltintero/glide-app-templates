import { ImageResponse } from 'next/og';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';

export const alt = 'Custom App Development Service';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  const title = service ? service.h1.split('—')[0].trim() : 'Custom App Development';
  const category = service?.category || 'Business';
  const price = service ? `From $${service.startingPrice.toLocaleString()}` : '';
  const timeline = service?.timelineWeeks ? `${service.timelineWeeks} delivery` : '';

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
            background: '#705CF6',
          }}
        />
        {/* Category + stats */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              background: 'rgba(112, 92, 246, 0.15)',
              border: '1px solid rgba(112, 92, 246, 0.3)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '18px',
              color: '#C5BDFA',
            }}
          >
            {category}
          </span>
          {price && (
            <span style={{ fontSize: '16px', color: '#aaa' }}>{price}</span>
          )}
          {timeline && (
            <span style={{ fontSize: '16px', color: '#aaa' }}>{timeline}</span>
          )}
        </div>
        {/* Title */}
        <h1
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            margin: 0,
            flex: 1,
          }}
        >
          {title}
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
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ color: '#666', fontSize: '14px' }}>300+ Apps Delivered</span>
            <span style={{ color: '#666', fontSize: '14px' }}>40+ Team</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
