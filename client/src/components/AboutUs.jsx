import React from 'react';

const AboutUs = () => {
  return (
    <section className="container mx-auto py-20 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl font-bold mb-8">About Us</h2>
      
      <p className="text-lg mb-6">
        We are a dedicated team committed to fostering community resilience through a blend of educational resources, community engagement activities, and collaborative initiatives. Our mission is to empower communities to withstand, adapt to, and recover from challenges and disruptions, ensuring a safer and more sustainable future for everyone.
      </p>
      
      <h3 className="text-3xl font-semibold mb-4">What is Community Resilience?</h3>
      <p className="text-lg mb-6">
        Community resilience refers to the ability of a community to prepare for, respond to, and recover from adverse situations such as natural disasters, economic challenges, or social disruptions. It's about equipping communities with the knowledge, tools, and support they need to bounce back stronger from adversity. Our focus on community resilience includes:
      </p>
      
      <ul className="list-disc pl-5 space-y-4 text-lg mb-6">
        <li><strong>Education and Awareness:</strong> Providing accessible educational resources that inform communities about key topics like health, environmental stewardship, disaster preparedness, and sustainable living.</li>
        <li><strong>Community Engagement:</strong> Organizing activities and initiatives that bring people together, fostering a sense of unity and collaboration. We believe that connected communities are stronger and more resilient.</li>
        <li><strong>Collaboration and Partnerships:</strong> Working closely with local organizations, governments, and other stakeholders to create a network of support and share resources that benefit the entire community.</li>
        <li><strong>Adaptive Strategies:</strong> Encouraging communities to develop adaptive strategies that allow them to respond flexibly to changing circumstances, whether they are dealing with natural disasters, public health crises, or economic shifts.</li>
        <li><strong>Empowerment:</strong> Empowering individuals with the skills and knowledge they need to take action in their own lives, contributing to the overall resilience of the community.</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Our Approach</h3>
      <p className="text-lg mb-6">
        We take a holistic approach to community resilience, understanding that it involves more than just responding to immediate threats. It's about creating a foundation of strength and adaptability that allows communities to thrive, even in the face of adversity. This includes:
      </p>
      
      <ul className="list-disc pl-5 space-y-4 text-lg">
        <li><strong>Research and Innovation:</strong> Continuously exploring new methods and technologies that can enhance community resilience.</li>
        <li><strong>Capacity Building:</strong> Offering training and resources to build the capacity of community leaders and organizations.</li>
        <li><strong>Sustainability:</strong> Promoting practices that ensure the long-term sustainability of community resources and infrastructure.</li>
        <li><strong>Inclusivity:</strong> Ensuring that our initiatives are inclusive and accessible to all members of the community, recognizing the diverse needs and contributions of every individual.</li>
      </ul>
    </section>
  );
};

export default AboutUs;
