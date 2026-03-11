import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

const faqs = [
  {
    question: 'What is a Glide template?',
    answer: 'A Glide template is a pre-built application that you can customize for your own needs. It includes all the screens, logic, and design elements needed for a specific use case. You simply copy the template, connect your data source, and customize it to match your brand.',
  },
  {
    question: 'Do I need coding skills to use these templates?',
    answer: 'No coding required. Glide is a no-code platform, and our templates are designed to be easily customized through Glide\'s visual builder. You can modify layouts, add fields, and change styling without writing a single line of code.',
  },
  {
    question: 'What happens after I purchase a template?',
    answer: 'After purchasing, you\'ll receive immediate access to copy the template to your Glide account. From there, you can customize it, connect your data (Google Sheets, Excel, etc.), and deploy it to your users.',
  },
  {
    question: 'Can I get help customizing a template?',
    answer: 'Yes. While templates are designed to be easy to customize yourself, we offer professional customization services through LOW / CODE Agency. Contact us at lowcode.agency/contact to discuss your needs.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Due to the digital nature of templates, all sales are final. However, we\'re confident in our work and happy to help resolve any issues you encounter.',
  },
  {
    question: 'Can I use a template for multiple projects?',
    answer: 'Each template purchase includes a license for one project. If you need to use the template for multiple projects or clients, please contact us for extended licensing options.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export function FAQ() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-dark-gray">
            Everything you need to know about our Glide templates.
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          className="mt-12 space-y-3"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="overflow-hidden rounded-lg border border-light-gray bg-white"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-near-black hover:bg-light-gray/50">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-dark-gray transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden px-6 pb-4 text-dark-gray">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
