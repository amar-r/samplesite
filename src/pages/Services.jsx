import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Meta from '../components/Meta';
import services from '../data/services.json';
import Card from '../components/Card';

const Services = () => (
  <>
    <Meta title="Our Services" description="Explore our range of lactation support services, including prenatal, in-home, and virtual consultations." />
    <div>
      <h1 className="text-4xl font-bold font-heading text-gray-800 dark:text-white mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} id={service.id} className="flex flex-col">
            <h2 className="text-2xl font-semibold font-heading text-rose-600 dark:text-rose-400 mb-2">{service.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{service.description}</p>
            <p className="text-xl font-bold text-gray-800 dark:text-white mb-4">{service.price}</p>
            <Link to="/book">
              <Button className="w-full">Book Now</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  </>
);

export default Services;
