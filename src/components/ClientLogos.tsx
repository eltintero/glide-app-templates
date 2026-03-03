const clients = [
  { name: 'Medtronic', logo: '/clients/medtronic.svg' },
  { name: 'American Express', logo: '/clients/americanexpress.svg' },
  { name: 'Coca-Cola', logo: '/clients/cocacola.svg' },
  { name: 'Dataiku', logo: '/clients/dataiku.svg' },
  { name: 'Zapier', logo: '/clients/zapier.svg' },
  { name: 'Sotheby\'s', logo: '/clients/sothebys.svg' },
  { name: 'Margaritaville', logo: '/clients/margaritaville.svg' },
];

export function ClientLogos() {
  return (
    <div className="w-full">
      <p className="text-center text-sm text-gray-500 mb-8">
        Trusted by innovative teams worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {clients.map((client) => (
          <div 
            key={client.name} 
            className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-10 lg:h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
