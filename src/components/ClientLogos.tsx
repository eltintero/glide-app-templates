const clients = [
  { name: 'Sotheby\'s', logo: '/clients/sothebys.svg' },
  { name: 'Margaritaville', logo: '/clients/margaritaville.svg' },
  { name: 'Zapier', logo: '/clients/zapier.png' },
  { name: 'Dataiku', logo: '/clients/dataiku.svg' },
  { name: 'Coca-Cola', logo: '/clients/cocacola.png' },
  { name: 'American Express', logo: '/clients/americanexpress.png' },
  { name: 'Medtronic', logo: '/clients/medtronic.svg' },
];

export function ClientLogos() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-700 overflow-hidden">
      <p className="text-sm text-gray-400 text-center mb-6">
        Trusted by leading companies
      </p>
      <div className="relative">
        {/* First row - left to right */}
        <div className="flex animate-ticker">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
