import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#0e0e0e',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="100" height="140" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.68688 27.9999H0.333252L10.313 0.333252H19.6666L9.68688 27.9999Z" fill="#705CF6"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
