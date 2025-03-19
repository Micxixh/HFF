import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Top Banner */}
      <header className="bg-[#9CE4FF] text-[#00506C] flex justify-end items-center h-12 px-6 text-sm">
        <a href="tel:+447305161510" className="flex items-center gap-2 mr-6">
          <span className="material-symbols-outlined">call</span>
          +44 7305 161510
        </a>
        <a href="mailto:contact@hff.co.uk" className="flex items-center gap-2">
          <span className="material-symbols-outlined">mail</span>
          contact@hff.co.uk
        </a>
      </header> 

      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white flex justify-between items-center px-10 py-4 shadow-md z-50">
        <h1 className="text-2xl font-bold">HFF</h1>
        <div className="flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-[#06BEFF]">Home</a>
          <a href="#services" className="hover:text-[#06BEFF]">Services</a>
          <a href="#faqs" className="hover:text-[#06BEFF]">FAQs</a>
          <a href="#about" className="hover:text-[#06BEFF]">About Us</a>
          <a href="#contact" className="hover:text-[#06BEFF]">Contact Us</a>
        </div>
        <a className="bg-[#06BEFF] text-white px-4 py-2 rounded-md" href="#contact">
          Request a Quote
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div className=" w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">Heavy Freight & Furniture Ltd.</h1>
          <p className="mt-4 text-lg text-gray-600">
            If you have a large, bulky item or items that need delivering across the UK, HFF delivery service is the ideal solution. We’re available 24 hours a day, 7 days a week, and can get started on your order at a moment’s notice.
          </p>
          <a className="bg-[#06BEFF] text-white px-6 py-3 rounded-md inline-block mt-6" href="#contact">
            Request a Quote
          </a>
        </div>
        <Image 
          src="https://i.imgur.com/l9kvzTM.png"
          alt="Luton Van"
          width={500}
          height={300}
          className="rounded-md"
        />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-gray-900">About Us</h2>
      <p className="text-center mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
        Up to Your Door is committed to providing reliable and professional delivery services with a personal touch. 
        We believe in going the extra mile for our customers, ensuring every package is handled with care.
      </p>

      {/* Delivering with Care */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-16 gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">Delivering with Care</h3>
          <p className="mt-4 text-gray-700">
            We prioritize our customers, ensuring every package is handled with the utmost respect.
            Our team is dedicated to making each delivery stress-free and seamless.
          </p>
        </div>
        <Image 
          src="https://i.imgur.com/MFkWVTW.jpeg" // Replace with actual image URL
          alt="Delivering with care"
          width={450} 
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Embracing Sustainability */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-5xl mx-auto mt-16 gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">Embracing Sustainability</h3>
          <p className="mt-4 text-gray-700">
            We contribute to a greener future through optimized routes, a well-maintained eco fleet, 
            and efficient warehousing and storage solutions.
          </p>
        </div>
        <Image 
          src="https://i.imgur.com/Lk6Qf6H.jpeg" // Replace with actual image URL
          alt="Embracing Sustainability"
          width={450} 
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Supporting Your Business Growth */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-16 gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">Supporting Your Unique Business Growth</h3>
          <p className="mt-4 text-gray-700">
            Our 24/7 cost-effective delivery and personalized logistics solutions empower your business to thrive, 
            ensuring flexibility and reliability.
          </p>
        </div>
        <Image 
          src="https://i.imgur.com/5gPGvwk.jpeg" // Replace with actual image URL
          alt="Business Growth"
          width={450} 
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Strengthening Communities */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-5xl mx-auto mt-16 gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">Strengthening Communities</h3>
          <p className="mt-4 text-gray-700">
            Dedicated to responsible practices, we actively engage with London and Greater area communities, 
            ensuring dependable and ethical logistics support.
          </p>
        </div>
        <Image 
          src="https://i.imgur.com/5bwN9H8.jpeg" // Replace with actual image URL
          alt="Strengthening Communities"
          width={450} 
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Our Customers */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-16 gap-10">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800">Our Customers</h3>
          <p className="mt-4 text-gray-700">
            At HFF, we offer personalized logistics solutions catering to a variety of needs. From delicate parcels 
            to oversized freight, we guarantee fast, secure, and efficient delivery.
          </p>
        </div>
        <Image 
          src="https://i.imgur.com/htZsicC.png" // Replace with actual image URL
          alt="Strengthening Communities"
          width={450} 
          height={300}
          className="rounded-md"
        />
      </div>

      {/* Industries We Serve */}
      <div className="max-w-5xl mx-auto mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800">What Industries Do We Serve?</h3>
        <p className="mt-4 text-gray-700">
          Our expertise spans across multiple industries, ensuring reliable logistics solutions.
        </p>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            { name: "E-commerce", description: "Fast and efficient delivery for online businesses." },
            { name: "Food & Beverage", description: "Temperature-controlled transport for perishable goods." },
            { name: "Retail", description: "Reliable logistics support for stores and suppliers." },
            { name: "Wholesale", description: "Bulk delivery solutions for large-scale distributors." }
          ].map((industry, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold">{industry.name}</h3>
              <p className="text-gray-600 mt-2">{industry.description}</p>
            </div>
          ))}
        </div>
</div>

    </section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-900">Our Services</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-6">
          {["Same-Day Delivery", "Overnight Delivery", "Contract Services", "Domestic Services"].map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg w-64 text-center">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-600 mt-2">Fast, reliable, and efficient delivery solutions.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-900">FAQs</h2>
        <div className="max-w-3xl mx-auto mt-6 space-y-6">
          {[
            { question: "What areas do you cover?", answer: "We provide delivery services across the UK, including London, Manchester, Birmingham, and surrounding areas." },
            { question: "How can I book a delivery?", answer: "You can book a delivery through our website, by phone, or by emailing us at contact@hff.co.uk." },
            { question: "Do you offer same-day delivery?", answer: "Yes, we offer same-day delivery for urgent packages. Contact us to check availability in your area." },
            { question: "Are my packages insured?", answer: "Yes, all packages handled by HFF are insured for loss or damage during transit." }
          ].map((faq, index) => (
            <details key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
              <summary className="text-lg font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      
    <section id="contact" className="py-20 px-6 md:px-10 bg-white">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Need a delivery quote or have questions? Our team is ready to assist you.
        </p>
      </div>

      {/* Contact Details*/}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-16 gap-10">
        
        {/* Contact Details */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
          <p className="text-gray-700">
            We’re here to provide expert logistics support. Contact us for inquiries, quotes, or special delivery requests.
          </p>
          
          <div className="space-y-4">
            <p className="text-lg"><strong> Address:</strong> 123 Logistics Street, London, UK</p>
            <p className="text-lg"><strong> Phone:</strong> <a href="tel:+447305161510" className="text-[#06BEFF] hover:underline">+44 7305 161510</a></p>
            <p className="text-lg"><strong>✉ Email:</strong> <a href="mailto:contact@hff.co.uk" className="text-[#06BEFF] hover:underline">contact@hff.co.uk</a></p>
            <p className="text-lg"><strong> Business Hours:</strong> Mon-Fri: 8am - 6pm | Sat-Sun: 10am - 4pm</p>
          </div>
        </div>

        {/* Contact Form Section */}         
        <form className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#06BEFF]" />
            <input type="email" placeholder="Email Address" className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#06BEFF]" />
          </div>
          
          <input type="text" placeholder="Subject" className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#06BEFF]" />
          
          <textarea placeholder="Your Message" rows="5" className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#06BEFF]"></textarea>
          
          <button type="submit" className="bg-[#06BEFF] text-white px-6 py-3 rounded-md w-full md:w-auto block mx-auto">
            Send Message
          </button>
        </form>
       
      </div>
      
    </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-10">
        <p>&copy; {new Date().getFullYear()} HFF - Heavy Furniture & Freight Limited</p>
        <p className="text-center mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
          The following items cannot be transported due to safety or legal regulations.
        </p>

        <div className="max-w-3xl mx-auto mt-6 space-y-4">
          <details className="bg-gray-100 p-4 rounded-md shadow-md">
            <summary className="text-lg text-gray-900 font-semibold cursor-pointer">Click to view restricted items</summary>
            <ul className="mt-2 list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Aerosols</strong> (by air freight and road services)</li>
              <li><strong>Items with explosive charges</strong> (e.g., steering wheels with airbags, life rafts, life jackets)</li>
              <li><strong>Animals</strong> (including birds, fish, insects, larvae)</li>
              <li><strong>Items offensive to the religion or culture</strong> of the destination country</li>
              <li><strong>Banderols/Tax stickers</strong></li>
              <li><strong>Batteries</strong></li>
              <li><strong>Bullion or precious metals</strong></li>
              <li><strong>Complete firearms, firearm parts, ammunition, explosives, weapons</strong></li>
              <li><strong>Dangerous/Hazardous goods</strong> (e.g., dry ice, biological substances, flammable liquids, UN-classified dangerous goods)</li>
              <li><strong>Human remains or ashes</strong></li>
              <li><strong>Illegal goods</strong> (e.g., counterfeit goods, narcotics)</li>
              <li><strong>Irreplaceable/Unique items</strong></li>
              <li><strong>Ivory and other banned products</strong></li>
              <li><strong>Jewellery, loose precious stones</strong></li>
              <li><strong>Medical samples</strong> (includes bodily fluids and tissue)</li>
              <li><strong>Negotiable and 'Cash-like' instruments</strong> (e.g., blank cheques, credit cards, event tickets, currency, SIM cards, unused stamps)</li>
              <li><strong>Perfumes and Aftershaves</strong></li>
              <li><strong>Perishable items</strong></li>
              <li><strong>Pornography</strong></li>
              <li><strong>Tobacco</strong></li>
              <li><strong>Toner/Printer cartridges</strong></li>
            </ul>
          </details>
        </div>
    </footer>
      
    </div>
  );
}
