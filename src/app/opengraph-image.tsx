import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Glide App Templates by LOW / CODE Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#282828',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <svg width="40" height="56" viewBox="0 0 20 28" fill="none">
            <path d="M9.68688 27.9999H0.333252L10.313 0.333252H19.6666L9.68688 27.9999Z" fill="#705CF6"/>
          </svg>
          <span style={{ color: '#aaa', fontSize: '24px', fontWeight: 500 }}>
            LOW / CODE Agency
          </span>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Premium Glide{' '}
          <span style={{ color: '#C5EF48' }}>Templates</span>
        </h1>
        <p
          style={{
            fontSize: '24px',
            color: '#aaa',
            textAlign: 'center',
            marginTop: '24px',
            maxWidth: '700px',
          }}
        >
          Production-ready app templates. Launch in hours, not weeks.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
          }}
        >
          {['15+ Templates', '300+ Apps Delivered', 'Fortune 500 Clients'].map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C5EF48' }} />
              <span style={{ color: '#ccc', fontSize: '16px' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
