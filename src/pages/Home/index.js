import React from 'react';

// Components
import OwnerDeatil from 'components/OwnerDeatil';
import History from 'components/History';
import Ownership from 'components/Ownership';

const Home = ({ theme }) => {

  return (
    <div className="home-page">
      {/* Owner Detail Sectiom */}
      <OwnerDeatil />
      {/* Owner Detail Sectiom End */}

      {/* History Section */}
      <History />
      {/* History Section */}

      {/* Ownership Section */}
      <Ownership />
      {/* Ownership Section End */}

    </div>
  )
};

export default Home;
