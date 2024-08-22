import React from 'react';

const CommunityEngagement = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-4">Community Engagement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Upcoming Workshops</h3>
          <p>Date: 12th August</p>
          <p>Venue: Community Hall</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Local Meetups</h3>
          <p>Date: 20th August</p>
          <p>Venue: City Park</p>
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;
