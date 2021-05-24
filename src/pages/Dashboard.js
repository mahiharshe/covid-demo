import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import Search from '../components/Search';
import Layout from '../shared/ui/Layout';
import { useHistory } from 'react-router-dom';

const Dashboard = props => {
  // const history = useHistory();
  let history = useHistory();
  console.log('history=', JSON.stringify(history));
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    history.push('/search');
    setDisplay(true);
  };
  return (
    <>
      {/* {!display ? ( */}
      <Layout>
        <SearchInput onClick={handleClick} />
      </Layout>
      {/* ) : (
        <Search />
      )} */}
    </>
  );
};
export default Dashboard;
