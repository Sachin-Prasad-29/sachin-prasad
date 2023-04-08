import { useEffect, useState } from 'react'
import axios from '../../services/axios.instance ';

interface SocialData {
    _id: string;
    logo: string;
    url: string;
    __v: number;
}

const SocialForm = () => {
  const [socialData, setSocialData] = useState<SocialData[]>([]);

  useEffect(() => {
      const fetch = async () => {
          const payload = {
              method: 'GET',
              url: `/social`,
          };

          const response = await axios(payload);
          setSocialData(response.data);
      };

      fetch();
      return () => {};
  }, []);
  return (
      <div>
          {socialData.map((eachExp) => {
              return (
                  <div key={eachExp._id} className="fetched-data">
                      <div>{eachExp.logo}</div>
                      <div>{eachExp.url}</div>
                  </div>
              );
          })}
      </div>
  );
}

export default SocialForm
