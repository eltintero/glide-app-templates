const clients = [
  { name: 'Sotheby\'s', logo: '/clients/sothebys.svg' },
  { name: 'Margaritaville', logo: '/clients/margaritaville.svg' },
  { name: 'Zapier', logo: '/clients/zapier.svg' },
  // Add more clients as needed
];

export function ClientLogos() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-700">
      <p className="text-sm text-gray-400 text-center mb-6">
        Trusted by leading companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
        {clients.map((client) => (
          <div 
            key={client.name}
            className="flex items-center justify-center p-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
